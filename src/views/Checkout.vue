<template>
  <div class="checkout">
    <div class="checkout-form">
      <h1 class="checkout-form__title">運送</h1>
      <component :is="changeForm"></component>
      <button class="checkout-form__button" @click="checkOutBtn">
        {{ changeForm === 'ListShip' ? '下一步' : '結帳' }}
      </button>
    </div>
    <div class="checkout-order">
      <div class="order">
        <h2 class="order__title">訂單摘要</h2>
        <ul class="order__list">
          <li class="order__list__item">
            <span class="order__list__item-price">小計</span>
            <span class="order__list__item-price">NT$ {{ getCartTotal }}</span>
          </li>
          <li class="order__list__item">
            <span class="order__list__item-price">運費</span>
            <span class="order__list__item-price">NT$ {{ getFareTotal }}</span>
          </li>
          <li class="order__list__item order__list__item--font-large">
            <span class="order__list__item-price">總計</span>
            <span class="order__list__item-price"
              >NT$ {{ getCartTotal + getFareTotal }}</span
            >
          </li>
        </ul>
      </div>
      <div class="order">
        <h2 class="order__title">購物清單({{ getCartList.length }})</h2>
        <ul class="order__list order__list-product">
          <li
            v-for="order in cartData"
            :key="order.name"
            class="order__list__item"
          >
            <img :src="order.image" alt="" class="order__list__item-img" />
            <div class="order__list__item-product">
              <p class="product-name">{{ order.name }}({{ order.quantity }})</p>
              <p class="product-price">
                NT$ {{ order.price * order.quantity }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ListPay from '@/components/checkout/ListPay.vue'
import ListShip from '@/components/checkout/ListShip.vue'
export default {
  name: 'Checkout',
  components: {
    ListPay,
    ListShip,
  },
  data() {
    return {
      changeForm: 'ListShip',
      cartData: this.$store.state.cart.cartData,
    }
  },
  computed: {
    ...mapGetters(['getCartTotal', 'getCartList']),
    getFareTotal() {
      return this.$store.state.cart.fareTotal
    },
  },
  methods: {
    checkOutBtn() {
      if (this.changeForm === 'ListPay') {
        this.$router.push('/success')
      }
      this.changeForm = 'ListPay'
    },
  },
}
</script>

<style lang="scss" scoped>
.checkout {
  width: 780px;
  margin: 30px auto 60px;
  display: flex;
  justify-content: space-between;

  // ====== RWD  ======
  @include RWD_991 {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @include RWD_576 {
    margin: 0 auto 60px;
  }

  // 表單
  &-form {
    align-self: flex-start;
    width: 460px;
    background-color: map-get($theme-colors, dark-green);

    // ====== RWD  ======
    @include RWD_991 {
      align-self: unset;
      margin-bottom: 30px;
    }
    @include RWD_576 {
      width: 100%;
    }

    &__title {
      width: 380px;
      margin: 0px auto;
      padding: 30px 0;
      color: map-get($theme-colors, light-green);

      // ====== RWD  ======
      @include RWD_576 {
        width: 340px;
      }
    }

    &__button {
      margin-top: 25px;
      border: 0;
      width: 100%;
      background-color: map-get($theme-colors, light-yellow);
      font-size: map-get($fontSize, large);
      font-weight: bold;
      padding: 16px;
      transition: all 0.5s;

      &:hover {
        background-color: map-get($theme-colors, light-green);
      }
    }
  }

  // 清單
  &-order {
    width: 300px;
    // ====== RWD  ======
    @include RWD_991 {
      width: 460px;
    }
    @include RWD_576 {
      width: 100%;
    }
  }
}

// 清單
.order {
  border: 1px solid map-get($theme-colors, border);
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  // 標題
  &__title {
    text-align: center;
    background-color: map-get($theme-colors, light-green);
    color: map-get($theme-colors, dark-green);
    padding: 16px;
  }

  // 列表
  &__list {
    width: 260px;
    margin: 10px auto;
    // ====== RWD  ======
    @include RWD_991 {
      width: 420px;
    }
    @include RWD_576 {
      width: 360px;
    }

    // 購物清單
    &-product {
      max-height: 270px;
      overflow-y: scroll;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      color: map-get($theme-colors, dark-green);

      // 購物清單
      &-img {
        width: 120px;
        height: 80px;
        object-fit: cover;
      }
      &-product {
        width: 110px;
        align-self: center;
        font-size: map-get($fontSize, medium);
      }
    }
    &__item--font-large {
      font-size: map-get($fontSize, large);
      font-weight: bold;
    }
  }
}
</style>
