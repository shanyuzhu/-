<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in list" v-bind:key="index">
              <div class="item-check">
                <span class="checkbox" v-bind:class="{'checked':item.productSelected}"  @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <span>{{item.productName + ' , ' + item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;"  @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
              <div class="item-del" @click="popup()"> </div>
              <modal
                  title="确定删除吗"
                  btnType="3" 
                  cancelText='取消'
                  sureText="确定"
                  modalType="middle" 
                  :showModal="showModal"
                  @submit="delProduct(item)"
                  @cancel="showModal=false"
                  class="modal"
                >
                  <template v-slot:body>
                    <h1 style="font-weight:100; text-align:center">确定删除</h1>
                  </template>
                </modal>    
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
            
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import NavFooter from './../components/NavFooter'
  import Modal from "./../components/Modal"
  export default{
    name:'index',
    components:{
      OrderHeader,
      NavFooter,
      Modal
    },
    data(){
      return {
        list:[],//商品列表
        allChecked:false,//是否全选
        cartTotalPrice:0,//商品总金额
        checkedNum:0,//选中商品数量
        showModal:false
      }
    },
    mounted(){
      this.getCartList();
    },
    methods:{
      // 获取购物车列表
      getCartList(){
        this.axios.get('/carts').then((res)=>{
          this.renderData(res);
        })
      },
      // 更新购物车数量和购物车单选状态
      updateCart(item,type){
        let quantity = item.quantity,
            selected = item.productSelected;
        if(type == '-'){
          if(quantity == 1){
            this.$message.warning('商品至少保留一件');
            return;
          }
          --quantity;
        }else if(type == '+'){
          if(quantity > item.productStock){
            this.$message.warning('购买数量不能超过库存数量');
            return;
          }
          ++quantity;
        }else{
          selected = !item.productSelected;
        }
        this.axios.put(`/carts/${item.productId}`,{
          quantity,
          selected
        }).then((res)=>{
          this.renderData(res);
        })
      },
      
      popup(){
        this.showModal=true;
      },
      
      // 删除购物车商品
      delProduct(item){
        this.axios.delete(`/carts/${item.productId}`).then((res)=>{
          this.$message.success('删除成功');
          this.renderData(res);
          this.showModal=false;
        });
      },
    
      
      // 控制全选功能
      toggleAll(){
        let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
        this.axios.put(url).then((res)=>{
          this.renderData(res);
        })
      },
      // 公共赋值
      renderData(res){
        this.list = res.cartProductVoList || [];
        this.allChecked = res.selectedAll;
        this.cartTotalPrice = res.cartTotalPrice;
        this.checkedNum = this.list.filter(item=>item.productSelected).length;
      },
      // 购物车下单
      order(){
        let isCheck = this.list.every(item=>!item.productSelected);
        if(isCheck){
          this.$message.warning('请选择一件商品');
        }else{
          this.$router.push('/order/confirm');
        }
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import "./../assets/scss/mixin.scss";
  .cart{
    
    .wrapper{
      background-color:$colorJ;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:$colorG;
        font-size:14px;
        color:$colorD;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid $colorH;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') $colorA no-repeat center;
            background-size:16px 12px;
            border:none;
            
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid $colorH;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: $colorB;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:$colorB;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid $colorH;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:$colorB;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:$colorB;
                }
              }
            }
            .item-total{
              flex:1;
              color:$colorA;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
            .modal{
                position:fixed; 
                top:0;
                left:0;
                width:100%;
                height:100%;
                cursor:auto;
                transition: all .5s;
                &.slide-enter-active{
                  top:0%;
                }
                &.slide-leave-active{
                  top:-100%;
                }
                &.slide-enter{
                  top:-100%;
                  transition: all .5s;
                }
              }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: $colorC;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: $colorC;
            margin-right:37px;
          }
          span{
            color:$colorA;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:$colorA;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>