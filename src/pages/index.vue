<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;" class="a">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">电视 盒子</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">笔记本 显示器 平板</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">家电 插线板</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">出行 穿戴</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">智能 路由器</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">电源 配件</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">健康 儿童</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">耳机 音响</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="a">生活 箱包</a>
              <div class="children">
                <ul v-for="(item, i) in menulist" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub?'/#/product'+sub.id:''">
                      <img v-lazy="sub?sub.img:'/imgs/小米10.jpg'" alt />
                      <span>{{sub?sub.name:"小米10"}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in slidelist" :key="index">
            <a :href="'/#/product/'+item.id">
              <img v-lazy="item.img" />
            </a>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <div class="container">
          <a :href="'/#/product/'+item.id" v-for="(item, index) in adslist" :key="index">
            <img v-lazy="item.img" alt />
          </a>
        </div>
      </div>
      <div class="banner">
        <div class="container">
          <a href="javascript:;">
            <img src="/imgs/banner-1.png" alt />
          </a>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="banner-left">
          <a href="javascript:;">
            <img src="/imgs/mix-alpha.jpg" alt />
          </a>
        </div>
        <div class="product-list">
          <div class="product-list-item" v-for="(arr,i) in productlist" :key="i">
             <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                <span :class="{'new-pro':j%2==0}">新品</span>
                <a :href="'/#/product/'+item.id" class="item-img" target="_blank">
                  <img v-lazy="item.mainImage" alt="">
                </a>
                <div class="item-info">
                  <a :href="'/#/product/'+item.id" target="_blank">{{item.name}}</a >
                  <a :href="'/#/product/'+item.id" target="_blank">{{item.subtitle}}</a>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <modal
        title="添加购物车"
        btnType="1" 
        sureText='查看购物车'
        modalType="middle" 
        :showModal="showModal"
        @submit="goToCart"
        @cancel="showModal=false"
      >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import Modal from "./../components/Modal";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          //   bulletActiveClass: "my-bullet-active",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slidelist: [
        {
          id: "42",
          img: "/imgs/slider/slide-6.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-7.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menulist: [
        [
          {
            id: "30",
            img: "/imgs/Readmi k30 pro 5G.jpg",
            name: "Readmi k30 pro 5G"
          },
          {
            id: "31",
            img: "/imgs/小米mix Alpha.jpg",
            name: "小米mix Alpha"
          },
          {
            id: "32",
            img: "/imgs/小米10.jpg",
            name: "小米10"
          },
          {
            id: "33",
            img: "/imgs/Readmi k30 pro.jpg",
            name: "Readmi k30 pro"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adslist: [
        {
          id: "30",
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: "31",
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: "32",
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: "33",
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      productlist: [],
      showModal:false
    };
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then((res)=>{
        res.list = res.list.slice(6,14);
        this.productlist = [res.list.slice(0,4),res.list.slice(4,8)];
      })
    },
    addCart(id){
      this.axios.post('/carts',{
        productId:id,
        selected: true
      }).then((res)=>{
        this.showModal = true;
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
      });
    },
    goToCart(){
      this.$router.push('/cart')
    }
  },
  
  
};
</script>

<style lang = "scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    position: relative;
    width: 1226px;
    height: 451px;
    .nav-menu {
      position: absolute;
      left: 0;
      top: 0;
      width: 264px;
      height: 451px;
      z-index: 2;
      padding: 26px 0;
      box-sizing: border-box;

      background: rgba(105, 101, 101, 0.6);
      .menu-item {
        width: 261px;
        line-height: 40px;

        &:hover {
          background: $colorA;
        }
        .a {
          display: inline-block;
          width: 245px;
          line-height: 40px;
          color: $colorG;
          font-size: 16px;
          position: relative;
          padding: 0 30px;
          box-sizing: border-box;
          &:after {
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            content: " ";
            margin-left: 5px;
            vertical-align: middle;
            position: absolute;
            top: 12px;
            right: 5px;
          }
        }
        &:hover {
          .children {
            height: 451px;
            opacity: 1;
            left: 261px;
            top: 0;
          }
        }
        .children {
          position: absolute;
          overflow: hidden;
          width: 966px;
          height: 0;
          background: $colorG;

          ul {
            width: 966px;
            height: 75px;
            line-height: 75px;
            margin-left: 23px;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              width: 240px;
              height: 75px;
              line-height: 75px;

              a {
                color:$colorB;
                img {
                  width: 35px;
                  height: 42px;
                  vertical-align: middle;
                }
                span {
                  margin-left: 15px;
                }
              }
            }
          }
        }
      }
    }
    img {
      width: 1226px;
      height: 451px;
    }
    .swiper-pagination {
      position: absolute;
      text-align: right;
      left: -55px;
      bottom: 20px;
    }
    .swiper-button-prev:after {
      position: absolute;
      left: 265px;
    }
  }
  .ads-box {
    display: flex;
    justify-content: space-around;
    width: 1226px;
    height: 167px;
    margin: 14px 0;
    a {
      margin-right: 14px;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 296px;
        height: 167px;
      }
    }
  }
  .product-box {
    width: 100%;
    height: 740px;
    background: rgba(245, 245, 245, 1);
    .container {
      position: relative;
      h2 {
        line-height: 71px;
      }
      .banner-left {
        position: absolute;
        left: 0;
        top: 70px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .product-list {
        position: absolute;
        right: 0;
        top: 70px;
        width: 986px;
        height: 619px;
        background: $colorG;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 16px;
        .product-list-item {
          width: 236px;
          height: 302px;
          margin-left: 16px;
          display: flex;
          justify-content: space-between;
          text-align: center;
       
          .item{
            width: 236px;
            height: 302px;
            color:$colorB;
            span {
              display: inline-block;
              width: 67px;
              line-height: 24px;
              font-size: 15px;
              color: $colorG;
              &.new-pro {
                background: #7ecf68;
              }
              &.kiss-pro {
                background: #e82626;
              }
            }
            .item-img {
              img {
                width: 190px;
                height: 195px;
              }
            }
            .item-info {
              a {
                display:inline-block;
                width: 236px;
                line-height: 24px;
                color: $colorB;
                font-size: 14px;
                &:last-child{
                  width: 236px;
                  line-height: 15px;
                  color: $colorD;
                  font-size: 14px;
                }
              }
              
              .price {
                color: #f20a0a;
                
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
