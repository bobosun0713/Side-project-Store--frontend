<template>
  <div class="product">
    <div class="product__banner">
      <div class="product__banner__slogan"></div>
    </div>
    <div class="product__container">
      <aside class="product__menu">
        <h1 class="product__menu-title">甜點類別</h1>
        <ul class="menu-list">
          <li
            class="menu-list__item"
            :class="{ 'menu-list__item--active': tabName === '' }"
            @click="changeProduct('')"
          >
            所有甜點({{ filterAmount() }})
          </li>
          <li
            class="menu-list__item"
            :class="{ 'menu-list__item--active': tabName === '本日精選' }"
            @click="changeProduct('本日精選')"
          >
            本日精選({{ filterAmount('本日精選') }})
          </li>
          <li
            class="menu-list__item"
            :class="{ 'menu-list__item--active': tabName === '人氣推薦' }"
            @click="changeProduct('人氣推薦')"
          >
            人氣推薦({{ filterAmount('人氣推薦') }})
          </li>
          <li
            class="menu-list__item"
            :class="{ 'menu-list__item--active': tabName === '新品上市' }"
            @click="changeProduct('新品上市')"
          >
            新品上市({{ filterAmount('新品上市') }})
          </li>
        </ul>
      </aside>
      <div class="product__list">
        <product-card
          v-for="product in filterProduct"
          :key="product.id"
          :product="product"
          class="product-card--mb"
        ></product-card>
        <!-- <pagination></pagination> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'
// import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Product',
  components: {
    ProductCard,
    // Pagination,
  },
  data() {
    return {
      tabName: '',
    }
  },
  computed: {
    // 取得Vuex資料
    getStoreProduct() {
      return this.$store.state.product.productData
    },
    // 計算各類別甜點數量
    filterAmount() {
      return (type) => {
        return this.getStoreProduct.filter((product) =>
          !type ? product : product.type === type
        ).length
      }
    },
    // 過濾甜點種類
    filterProduct() {
      return this.getStoreProduct.filter((product) =>
        !this.tabName ? product : product.type === this.tabName
      )
    },
  },
  mounted() {
    this.getProducts()
    // 首頁連結過來時
    this.tabName = this.$route.params.id
  },
  methods: {
    ...mapActions(['getProducts']),
    changeProduct(tab) {
      this.tabName = tab
    },
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
    color: map-get($theme-colors, dark-green);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    text-align: center;
    display: block;
    padding: 16px;
    cursor: pointer;
    &--active {
      background-color: map-get($theme-colors, light-green);
    }
  }
}
</style>
