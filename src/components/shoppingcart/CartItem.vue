<template>
  <div class="cart-item">
    <img class="cart-item__img" :src="product.image" alt="" />
    <div class="cart-item__group">
      <div class="cart-item__group-info">
        <div class="cart-item__group-title">{{ product.name }}</div>
        <div class="cart-item__group-price">NT$ {{ product.price }}</div>
      </div>
      <div class="amount__control">
        <button
          class="amount__control-button"
          :disabled="isAddLoading"
          @click="
            clickAmount(-1),
              addCartQuantity({ getUserInfo, cartProduct, product })
          "
        >
          -
        </button>
        <span class="amount__control-num">{{ product.quantity }}</span>
        <button
          class="amount__control-button"
          :disabled="isAddLoading"
          @click="
            clickAmount(1),
              addCartQuantity({ getUserInfo, cartProduct, product })
          "
        >
          +
        </button>
      </div>
    </div>
    <div class="cart-item__group">
      NT$ {{ product.price * product.quantity }}
    </div>
    <div class="cart-item__group">
      <button @click="deleteCart({ getUserInfo, product })">
        <font-awesome icon="trash-alt" class="icon "></font-awesome>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      cartProduct: {
        ...this.product,
      },
    }
  },
  computed: {
    ...mapGetters(['getUserInfo', 'getCartList']),
    isAddLoading() {
      return this.$store.state.cart.isAddLoading
    },
  },
  methods: {
    ...mapActions(['deleteCart', 'addCartTotal', 'addCartQuantity']),
    clickAmount(num) {
      let numTotal = this.cartProduct.quantity + num
      if (numTotal < 1) {
        this.quantity = 1
      } else if (numTotal > this.cartProduct.quantity) {
        this.cartProduct.quantity = numTotal
      } else {
        this.cartProduct.quantity = numTotal
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
    width: 100px;
    text-align: center;
    &:nth-of-type(1) {
      width: 300px;
      display: flex;
      justify-content: center;

      // ====== RWD  ======
      @include RWD_499 {
        width: auto;
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
        padding: 8px;
        text-align: center;
        width: 100%;
        border-top: 1px solid map-get($theme-colors, border);
        border-bottom: 1px solid map-get($theme-colors, border);
      }

      &:nth-of-type(3) {
        position: absolute;
        left: 0x;
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
</style>
