<template>
  <div class="home">
    <!-- 封面 -->
    <section class="home-banner">
      <ul class="banner__group">
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/product/product-7.jpg"
            alt=""
          />
          <div class="banner__group__item-link" @click="goProduct('本日精選')">
            本日精選
          </div>
        </li>
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/product/product-5.jpg"
            alt=""
          />
          <div class="banner__group__item-link" @click="goProduct('人氣推薦')">
            人氣推薦
          </div>
        </li>
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/product/product-6.jpg"
            alt=""
          />
          <div class="banner__group__item-link" @click="goProduct('新品上市')">
            新品上市
          </div>
        </li>
      </ul>
    </section>
    <!-- 介紹 -->
    <home-info></home-info>
    <home-info :type="true"></home-info>
    <!-- slogan -->
    <section class="home-slogan"></section>
    <!-- 商品 -->
    <section class="home-products">
      <product-card
        v-for="product in filterProduct"
        :key="product.id"
        :product="product"
      ></product-card>
    </section>
  </div>
</template>

<script>
import { collectionProduct } from '@/db'
import HomeInfo from '@/components/home/HomeInfo.vue'
import ProductCard from '@/components/product/ProductCard.vue'
export default {
  name: 'Home',
  components: {
    HomeInfo,
    ProductCard,
  },
  data() {
    return {
      productDate: [],
    }
  },
  computed: {
    filterProduct() {
      return this.productDate.filter((product) => product.type === '本日精選')
    },
  },
  mounted() {
    this.$bind('productDate', collectionProduct).then(() => {
      // alert('讀取完畢')
    })
  },
  methods: {
    goProduct(id) {
      this.$router.push({
        name: 'Product',
        params: {
          id: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  &-banner {
    width: 940px;
    height: 496px;
    margin: 0 auto 240px;
    background: url('../../assets/image/home/home-banner.jpg') no-repeat center
      center;
    background-size: cover;

    transition: all 0.5s;

    // ====== RWD  ======
    @include RWD_1200 {
      width: 100%;
    }
    @include RWD_768 {
      margin: 0 auto 295px;
    }
    @include RWD_576 {
      height: 280px;
      margin: 0 auto 305px;
    }
  }

  // slogan
  &-slogan {
    margin: 0 auto 105px;
    background: url('../../assets/image/home/home-slogan.svg') no-repeat center
      center;
    width: 90px;
    height: 330px;

    // ====== RWD  ======
    @include RWD_768 {
      background: url('../../assets/image/home/home-slogan-rwd.svg') no-repeat
        center center;
      width: 225px;
      height: 60px;
      margin: 0 auto 30px;
    }
  }

  // products
  &-products {
    width: 940px;
    margin: 0 auto 60px;
    display: flex;
    justify-content: space-between;

    // ====== RWD  ======
    @include RWD_991 {
      margin: 0 0 60px;
      padding: 0 0 20px;
      overflow-x: scroll;
      white-space: nowrap;
      display: block;
      width: 100%;
    }
  }
}

// 推薦甜點
.banner__group {
  display: flex;
  width: 780px;
  margin: 0 auto;
  transform: translateY(400px);

  transition: all 0.5s;

  // ====== RWD  ======
  @include RWD_1200 {
    width: 100%;
  }
  @include RWD_576 {
    transform: translateY(280px);
    height: 180px;
  }

  &__item {
    flex: 1;
    height: 260px;
    position: relative;

    // ====== RWD  ======
    @include RWD_576 {
      height: 180px;
    }

    &:not(:first-child) {
      border-left: 1px solid white;
    }

    &-img {
      width: 100%;
      height: 100%;
      filter: blur(2px);
      object-fit: cover;
    }

    // 連結
    &-link {
      cursor: pointer;
      position: absolute;
      top: 0;
      // display: block;
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: map-get($theme-colors, dark-green-opacity);
      color: map-get($theme-colors, light);
      font-size: map-get($fontSize, large);
      font-weight: bold;
      writing-mode: vertical-lr;
      text-orientation: upright;
      letter-spacing: 7px;
      transition: all 0.5s;

      &:hover {
        background-color: map-get($theme-colors, light-yellow-opacity);
        color: map-get($theme-colors, dark-green);
      }
    }
  }
}
</style>
