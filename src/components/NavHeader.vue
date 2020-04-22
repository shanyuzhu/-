<template>
  <div class="header">
          
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="//www.mi.com/index.html" target="__blank">小米商城</a>
          <a href="//www.miui.com/" target="__blank">MIUI</a>
          <a href="//iot.mi.com/index.html" target="__blank">loT</a>
          <a href="//i.mi.com/" target="__blank">云服务</a>
          <a href="//jr.mi.com?from=micom" target="__blank">金融</a>
          <a href="//youpin.mi.com/" target="__blank">有品</a>
          <a href="//xiaoai.mi.com/" target="__blank">小爱开放平台</a>
          <a href="//qiye.mi.com/" target="__blank">企业团购</a>
          <a href="//www.mi.com/aptitude/list/?id=41" target="__blank">资质证照</a>
          <a href="//www.mi.com/aptitude/list/" target="__blank">协议规则</a>
          <a class="appcode" href="//www.mi.com/appdownload/" target="__blank">下载app
            <span>
              <p>小米商城App</p>
            </span>
          </a>
          <a href="javascript:;">Selet Location</a>
        </div>     
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;"  v-if="!username" @click="login">登录</a>
          <a href="javascript:;"  v-if="username" @click="logout">退出登录</a>
          <a href="/#/register">注册</a>
          <a href="/#/order/list"  v-if="username">我的订单</a>
          <a href="javascript:;" @click="goToCart">
            <span class="icon-cart"></span>购物车
            {{cartCount}}
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product" v-for="(item,index) in phoneList" :key="index">
                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-2.png" alt />
                      </div>
                      <div class="pro-name">红米手机</div>
                      <div class="pro-price">799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-b.png" alt />
                      </div>
                      <div class="pro-name">小米笔记本pro</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-c.jpg" alt />
                      </div>
                      <div class="pro-name">涡轮洗衣机</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/路由器.png" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children">
              <div class="container">
                <ul>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="/#/product/35" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/门锁.jpg" alt />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <div class="bg-search">
              <a href="javascrppt:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "nav-header",
  data(){
    return{
      phoneList:[],
    }
  },
  computed:{
    // username(){
    //   return this.$store.state.username;
    // },
    // cartCount(){
    //   return this.$store.state.cartCount;
    // }
    ...mapState(['username','cartCount'])
  },
  mounted(){
    this.getProductList();
      this.getCartCount();
   
  },
  methods:{
    login(){
      this.$router.push('/login');
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then((res)=>{
        this.phoneList = res.list;
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    },
    logout(){
      this.axios.post('/user/logout').then(()=>{
        this.$message.success('退出成功');
        this.$cookie.set('userId','',{expires:'-1'});
        this.$store.dispatch('saveUserName','');
        this.$store.dispatch('saveCartCount','0');
      })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
.header {
  height: 141px;
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: $colorB;
    a {
      display: inline-block;
      color: #b0b0b0;
      font-size: 12px;
      margin-right: 17px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .topbar-menu{
        a{
          &:hover{
            color:$colorG;
          }
        }
        .appcode{
          &:hover{
            color:$colorG;
          }
          position:relative;
          span{
            position:absolute;
            overflow:hidden;
            top:39px;
            left:-35px;
            width:110px;
            height:0;
            background:$colorG;
            padding:0 10px 0 10px;
            box-sizing:border-box;
        
            transition: all .3s;

            &:before{
                  content:'';
                  background: url("/imgs/xmwxewm.png") no-repeat center $colorG;
                  display:block;
                  width:90px;
                  height:90px;
                  background-size:contain;          
              } 
          }
          &:hover{
            span{
              
              display:block;
              top:39px;
              left:-35px;
              width:110px;
              height:140px;
              background:$colorG;
              padding:10px;
              box-sizing:border-box;
              z-index:11;
              box-shadow: #aaa 0 1px 5px;
             
              transition: all .3s;

              p{
                display:inline-block;
                line-height:30px;
                color:$colorB;
              }
            }
          }
    
          
        }
      }
      
      .topbar-user {
        a:last-child {
          margin-right: 0;
          width: 110px;
          background: $colorA;
          color: $colorG;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .nav-header {
    position: relative;
    .container {
      // position: relative;
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .item-menu {
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;
        span {
          cursor: pointer;
          font-weight: 500;
        }
        &:hover {
          color: $colorA;
          .children {
            height: 220px;
            opacity: 1;
            top: 102px;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          }
        }
        .children {
          position: absolute;
          top: 102px;
          left: 0;
          width: 100%;
          overflow: hidden;
          height: 0px;
          border-top: 1px solid $colorH;
          z-index: 10;
          transition: all 0.5s;
          background-color: $colorG;

          .container {
            .product {
              position: relative;
              float: left;
              width: 203px;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              margin-top: 102px;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        .wrapper {
          display: flex;
          justify-content: space-between;
          input {
            display: inline-block;
            width: 264px;
            height: 50px;
            padding: 0 10px;
            border: 1px solid #e0e0e0;
          }

          .bg-search {
            margin-right: 0;
            width: 57px;
            height: 52px;
            a {
              display: inline-block;
              width: 55px;
              height: 48px;
              background: url("/imgs/icon-search.png") no-repeat center;
              background-size: 16px;
              border: 1px solid #e0e0e0;
            }
            &:hover {
              background: $colorA;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>
