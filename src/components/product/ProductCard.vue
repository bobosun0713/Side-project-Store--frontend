<template>
  <div class="product-card">
    <div class="card__header">
      <div class="card__header__title">
        本日精隨
      </div>
      <div class="card__header__fav">
        <font-awesome :icon="['far', 'heart']" class="icon"></font-awesome>
      </div>
    </div>
    <div class="card__body">
      <div class="card__body__info">
        <div class="card__body__info-name">焦糖馬卡龍</div>
        <div class="card__body__info-price">NT$ 450</div>
      </div>
      <button type="button" class="card__body__button">加入購物車</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
}
</script>

<style lang="scss" scoped>
.product-card {
  display: inline-block;
  width: 300px;

  // ====== RWD  ======
  @include RWD_991 {
    margin: 0 10px;
  }
}
.product-card--mb {
  margin-bottom: 20px;
}

// 圖片
.card__header {
  background: url('../../assets/image/product/product-1.jpg') no-repeat center
    center;
  background-size: cover;
  width: 100%;
  height: 315px;

  display: flex;
  justify-content: space-between;

  // title
  &__title {
    align-self: flex-start;
    padding: 16px 10px;
    background-color: map-get($theme-colors, dark-green);
    color: map-get($theme-colors, light);
    letter-spacing: 3px;
    writing-mode: tb-rl;
    margin-left: 20px;
  }

  // fav
  &__fav {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: 20px;

    .icon {
      width: 100%;
      height: 100%;
    }
  }
}

// 價錢
.card__body {
  &__info {
    display: flex;
    text-align: center;
    color: map-get($theme-colors, dark-green);
    font-weight: bold;

    &-name {
      padding: 15px 5px;
      border-right: 1px solid map-get($theme-colors, border);
      border-left: 1px solid map-get($theme-colors, border);
      flex: 1;
    }

    &-price {
      border-right: 1px solid map-get($theme-colors, border);
      padding: 15px 5px;
      width: 130px;
    }
  }

  &__button {
    color: map-get($theme-colors, dark-green);
    background-color: map-get($theme-colors, light-green);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    border: 0;
    width: 100%;
    padding: 16px;

    transition: all 0.5s;

    &:hover {
      color: map-get($theme-colors, light);
      background-color: map-get($theme-colors, dark-green);
    }
  }
}
</style>
