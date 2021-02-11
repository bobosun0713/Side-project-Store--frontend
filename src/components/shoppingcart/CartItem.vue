<template>
  <div class="cart-item">
    <img class="cart-item__img" :src="cartProduct.image" alt="" />
    <div class="cart-item__group">
      <div class="cart-item__group-info">
        <div class="cart-item__group-title">{{ cartProduct.name }}</div>
        <div class="cart-item__group-price">NT$ {{ cartProduct.price }}</div>
      </div>
      <div class="amount__control">
        <button
          class="amount__control-button"
          :disabled="isAddLoading"
          @click="
            clickAmount(-1), test({ getUserInfo, cartProduct, product, index })
          "
        >
          -
        </button>
        <span class="amount__control-num">{{ cartProduct.quantity }}</span>
        <button
          class="amount__control-button"
          :disabled="isAddLoading"
          @click="
            clickAmount(1), test({ getUserInfo, cartProduct, product, index })
          "
        >
          +
        </button>
      </div>
    </div>
    <div class="cart-item__group">
      NT$ {{ cartProduct.price * cartProduct.quantity }}
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
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      quantity: 1,
      cartProduct: {
        ...this.product,
      },
    }
  },
  computed: {
    ...mapGetters(['getUserInfo']),
    isAddLoading() {
      return this.$store.state.cart.isAddLoading
    },
  },
  methods: {
    ...mapActions([
      'deleteCart',
      'addCartTotal',
      'addCartQuantity',
      'test',
      'testdelete',
    ]),
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

  beforeDestroy() {
    // 當這筆資料被刪除時
    console.log('離開')
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
        padding: 8px 50px;
        text-align: right;
        width: 100%;
        border-top: 1px solid map-get($theme-colors, border);
        border-bottom: 1px solid map-get($theme-colors, border);
      }

      &:nth-of-type(3) {
        position: absolute;
        right: -70px;
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
