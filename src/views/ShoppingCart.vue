<template>
  <div class="Shopping-cart">
    <div class="cart-list">
      <h1 class="cart-list__title">您的購物車</h1>
      <div class="cart-list__container">
        <template v-if="getCartList.length !== 0">
          <cart-item
            v-for="(product, idx) in getCartList"
            :key="product.name"
            :product="product"
            :index="idx"
          ></cart-item>
        </template>
        <h2 v-else>無商品資料</h2>
      </div>
    </div>
    <div class="cart-order">
      <h2 class="cart-order__title">訂單摘要</h2>
      <ul class="cart-order__list">
        <li class="cart-order__list-item">
          <span class="list-title">小計</span>
          <span class="list-price">NT$ {{ getCartTotal }}</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">運費</span>
          <span class="list-price">NT$ {{ getFareTotal }}</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">總計</span>
          <span class="list-price"
            >NT$
            {{ getCartTotal === 0 ? 0 : getCartTotal + getFareTotal }}</span
          >
        </li>
      </ul>
      <button class="cart-order__button" @click="goCheckout">結帳</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NotifiCation from '@/mixin/notification.js'
import CartItem from '@/components/shoppingcart/CartItem.vue'
export default {
  name: 'ShoppingCart',
  components: {
    CartItem,
  },
  mixins: [NotifiCation],
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getCartTotal', 'getCartList']),

    getFareTotal() {
      return this.$store.state.cart.fareTotal
    },
  },
  mounted() {
    this.getCart()
  },
  methods: {
    ...mapActions(['getCart']),
    goCheckout() {
      if (!this.getCartList.length) {
        this.NotifiCation('錯誤', 'error', '目前購物車沒有商品！')
        return
      }
      this.$router.push('/checkout')
    },
  },
}
</script>

<style lang="scss" scoped>
.Shopping-cart {
  width: 940px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  // ====== RWD  ======
  @include RWD_991 {
    width: 100%;
    flex-direction: column;
  }
  @include RWD_576 {
    margin: auto;
  }
}

// 訂單列表
.cart-list {
  width: 620px;

  // ====== RWD  ======
  @include RWD_991 {
    width: 100%;
  }

  &__title {
    text-align: center;
    height: 65px;
    line-height: 65px;
    background-color: map-get($theme-colors, light-green);
    color: map-get($theme-colors, dark-green);
  }

  &__container {
    // margin: 25px 0;
    display: flex;
    flex-direction: column;
  }
}
.cart-item {
  padding: 25px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid map-get($theme-colors, border);
  margin-bottom: 30px;

  // ====== RWD  ======
  @include RWD_991 {
    justify-content: space-around;
  }
  @include RWD_576 {
    position: relative;
    flex-wrap: wrap;
  }
  @include RWD_499 {
    margin: 0 auto;
    justify-content: space-between;
    width: 315px;
    position: relative;
  }

  &__img {
    width: 110px;
    height: 110px;
    object-fit: cover;

    // ====== RWD  ======
    @include RWD_499 {
      width: 150px;
      height: 100px;
    }
  }

  &__group {
    &:nth-of-type(1) {
      display: flex;
      // ====== RWD  ======
      @include RWD_499 {
        flex-direction: column;
      }
    }
    &-info {
      margin-right: 50px;
      // ====== RWD  ======
      @include RWD_576 {
        margin-right: 35px;
      }
      @include RWD_499 {
        margin-right: 0;
        margin-bottom: 5px;
      }
    }

    // ====== RWD  ======
    @include RWD_499 {
      &:nth-of-type(2) {
        margin: 10px 0;
        padding: 8px 50px;
        text-align: right;
        width: 100%;
        border-top: 1px solid map-get($theme-colors, border);
        border-bottom: 1px solid map-get($theme-colors, border);
      }

      &:nth-of-type(3) {
        position: absolute;
        right: 10px;
        bottom: 45px;
      }
    }
  }
}

// 數量加減
.amount__control {
  //   margin: 0 auto;
  display: inline-block;
  border: 1px solid map-get($theme-colors, border);

  &-button {
    cursor: pointer;
    border: 0;
    width: 50px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
  }
  &-num {
    border-left: 1px solid map-get($theme-colors, border);
    border-right: 1px solid map-get($theme-colors, border);
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
}

// 訂單金額
.cart-order {
  align-self: flex-start;
  background-color: map-get($theme-colors, dark-green);
  width: 300px;

  // ====== RWD  ======
  @include RWD_991 {
    margin: 0 auto;
  }
  @include RWD_576 {
    width: 100%;
    background-color: transparent;
  }

  &__title {
    width: 260px;
    padding: 16px 0;
    margin: 0 auto;
    border-bottom: 1px solid map-get($theme-colors, light);
    color: map-get($theme-colors, light);
    text-align: center;

    // ====== RWD  ======
    @include RWD_576 {
      background-color: map-get($theme-colors, light-green);
      color: map-get($theme-colors, dark-green);
      width: 315px;
    }
  }

  &__list {
    width: 260px;
    margin: 10px auto;

    // ====== RWD  ======
    @include RWD_576 {
      width: 315px;
    }

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 2.5px 0;
      color: map-get($theme-colors, light);

      // ====== RWD  ======
      @include RWD_576 {
        color: map-get($theme-colors, dark-green);
        width: 315px;
      }

      &:last-child {
        margin-top: 8px;
        font-size: map-get($fontSize, large);
      }
    }
  }

  // 結帳
  &__button {
    border: 0;
    width: 100%;
    padding: 16px;
    background-color: map-get($theme-colors, light-yellow);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    color: map-get($theme-colors, dark-green);
  }
}
</style>
