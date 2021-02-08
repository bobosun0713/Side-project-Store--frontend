<template>
  <div class="product">
    <div class="product__banner">
      <div class="product__banner__slogan"></div>
    </div>
    <div class="product__container">
      <aside class="product__menu">
        <h1 class="product__menu-title">甜點類別</h1>
        <ul class="menu-list">
          <li class="menu-list__item">
            <router-link class="menu-list__item__link" to="">
              所有甜點(48)</router-link
            >
          </li>
          <li class="menu-list__item">
            <router-link class="menu-list__item__link" to=""
              >本日精選(10)</router-link
            >
          </li>
          <li class="menu-list__item">
            <router-link class="menu-list__item__link" to=""
              >人氣推薦(10)</router-link
            >
          </li>
          <li class="menu-list__item">
            <router-link class="menu-list__item__link" to=""
              >新品上市(12)</router-link
            >
          </li>
        </ul>
      </aside>
      <div class="product__list">
        <product-card
          v-for="item in 6"
          :key="item"
          class="product-card--mb"
        ></product-card>
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/product/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Product',
  components: {
    ProductCard,
    Pagination,
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__banner {
    margin: 0 auto 60px;
    background: url('../assets/image/product/product-4.jpg') no-repeat center
      center;
    background-size: cover;
    width: 940px;
    height: 496px;

    transition: all 0.5s;
    // ====== RWD  ======
    @include RWD_991 {
      margin: 0 auto;
      width: 100%;
      height: 400px;
    }
    @include RWD_768 {
      height: 350px;
    }
    @include RWD_576 {
      height: 280px;
    }

    &__slogan {
      background: url('../assets/image/home/home-slogan.svg') no-repeat center
        center;
      background-size: cover;
      width: 90px;
      height: 330px;
      float: right;
      margin: 40px;

      transition: all 0.5s;
      // ====== RWD  ======
      @include RWD_991 {
        margin: 25px 40px;
      }
      @include RWD_768 {
        width: 75px;
        height: 280px;
      }
      @include RWD_576 {
        width: 60px;
        height: 220px;
      }
    }
  }

  &__container {
    width: 940px;
    margin: 0 auto 60px;
    display: flex;
    justify-content: space-between;

    // ====== RWD  ======
    @include RWD_991 {
      flex-direction: column;
      width: 100%;
    }
  }

  // 側邊欄
  &__menu {
    width: 300px;
    // ====== RWD  ======
    @include RWD_991 {
      width: 100%;
      margin-bottom: 30px;
    }

    // 標題
    &-title {
      background-color: map-get($theme-colors, dark-green);
      color: map-get($theme-colors, light);
      padding: 16px 0;
      text-align: center;
    }
  }

  // 商品列表
  &__list {
    width: 620px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    // ====== RWD  ======
    @include RWD_991 {
      width: 100%;
      justify-content: center;
    }
  }
}

// 側邊欄
.menu-list {
  border: 1px solid map-get($theme-colors, border);

  &__item {
    border-bottom: 1px solid map-get($theme-colors, border);
    &__link {
      color: map-get($theme-colors, dark-green);
      font-size: map-get($fontSize, large);
      font-weight: bold;
      text-align: center;
      display: block;
      padding: 16px;
    }
  }
}
</style>
