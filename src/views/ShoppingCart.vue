<template>
  <div class="Shopping-cart">
    <div class="cart-list">
      <h1 class="cart-list__title">您的購物車</h1>
      <table class="table cart__table">
        <tr>
          <td class="table__td">
            <img
              class="table__td-img"
              src="../assets/image/product/product-1.jpg"
              alt=""
            />
          </td>
          <td class="table__td">
            <div class="table__td__name">焦糖馬卡龍</div>
            <div class="table__td__price">NT$ 450</div>
          </td>
          <td class="table__td">
            <div class="amount__control">
              <button class="amount__control-button">
                -
              </button>
              <span class="amount__control-num">1</span>
              <button class="amount__control-button">
                +
              </button>
            </div>
          </td>
          <td class="table__td">NT$ 400</td>
          <td class="table__td">
            <button class="table__td__delete">
              <font-awesome icon="trash-alt" class="icon "></font-awesome>
            </button>
          </td>
        </tr>
        <tr>
          <td class="table__td">
            <img
              class="table__td-img"
              src="../assets/image/product/product-1.jpg"
              alt=""
            />
          </td>
          <td class="table__td">
            <div class="table__td__name">焦糖馬卡龍</div>
            <div class="table__td__price">NT$ 450</div>
          </td>
          <td class="table__td">
            <div class="amount__control">
              <button class="amount__control-button">
                -
              </button>
              <span class="amount__control-num">1</span>
              <button class="amount__control-button">
                +
              </button>
            </div>
          </td>
          <td class="table__td">NT$ 400</td>
          <td class="table__td">
            <button class="table__td__delete">
              <font-awesome icon="trash-alt" class="icon "></font-awesome>
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="cart-order">
      <h2 class="cart-order__title">訂單摘要</h2>
      <ul class="cart-order__list">
        <li class="cart-order__list-item">
          <span class="list-title">小計</span>
          <span class="list-price">NT$ 200</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">運費</span>
          <span class="list-price">NT$ 200</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">總計</span>
          <span class="list-price">NT$ 200</span>
        </li>
      </ul>
      <button class="cart-order__button" @click="goCheckout">結帳</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  methods: {
    goCheckout() {
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
}

// 訂單列表
.cart-list {
  width: 620px;

  &__title {
    text-align: center;
    height: 65px;
    line-height: 65px;
    background-color: map-get($theme-colors, light-green);
    color: map-get($theme-colors, dark-green);
  }
}

// 訂單金額
.cart-order {
  align-self: flex-start;
  background-color: map-get($theme-colors, dark-green);
  width: 300px;

  &__title {
    width: 260px;
    padding: 16px 0;
    margin: 0 auto;
    border-bottom: 1px solid map-get($theme-colors, light);
    color: map-get($theme-colors, light);
    text-align: center;
  }

  &__list {
    width: 260px;
    margin: 10px auto;

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 2.5px 0;

      .list-title {
        color: map-get($theme-colors, light);
      }

      .list-price {
        color: map-get($theme-colors, light);
      }

      &:last-child {
        margin-top: 8px;
        .list-title {
          font-size: map-get($fontSize, large);
        }
        .list-price {
          font-size: map-get($fontSize, large);
        }
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

// 表單列表
.table {
  padding: 10px 0;
  width: 100%;

  &__td {
    padding: 20px 10px;
    text-align: center;
    border-bottom: 1px solid map-get($theme-colors, border);

    &:first-child {
      text-align: left;
      padding: 20px 0;
    }

    // 訂單圖片
    &-img {
      width: 110px;
      height: 110px;
      object-fit: cover;
    }

    // 刪除
    &__delete {
      cursor: pointer;
      border: 0;
      background-color: transparent;
      font-size: map-get($fontSize, medium);
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
