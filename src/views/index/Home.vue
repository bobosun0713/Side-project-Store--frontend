<template>
  <div class="home">
    <!-- 封面 -->
    <section class="home-banner">
      <ul class="banner__group">
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/home/banner-group-1.jpg"
            alt=""
          />
          <a class="banner__group__item-link" href="#">
            本日精選
          </a>
        </li>
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/home/banner-group-2.jpg"
            alt=""
          />
          <a class="banner__group__item-link" href="#">
            人氣推薦
          </a>
        </li>
        <li class="banner__group__item">
          <img
            class="banner__group__item-img"
            src="../../assets/image/home/banner-group-3.jpg"
            alt=""
          />
          <a class="banner__group__item-link" href="#">
            新品上市
          </a>
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
      <product-card v-for="item in 3" :key="item"></product-card>
    </section>
  </div>
</template>

<script>
import HomeInfo from '@/components/home/HomeInfo.vue'
import ProductCard from '@/components/product/ProductCard.vue'
export default {
  name: 'Home',
  components: {
    HomeInfo,
    ProductCard,
  },
}
</script>

<style lang="scss" scoped>
.home {
  &-banner {
    width: 940px;
    height: 496px;
    margin: 0 auto;
    background: url('../../assets/image/home/home-banner.jpg') no-repeat center
      center;
    background-size: cover;
    margin-bottom: 240px;
  }

  // slogan
  &-slogan {
    margin: 0 auto 105px;
    // margin-bottom: 105px;
    background: url('../../assets/image/home/home-slogan.svg') no-repeat center
      center;
    width: 90px;
    height: 330px;
  }

  // products
  &-products {
    width: 940px;
    margin: 0 auto 60px;
    display: flex;
    justify-content: space-between;
  }
}

// 推薦甜點
.banner__group {
  display: flex;
  width: 780px;
  margin: 0 auto;

  transform: translateY(400px);

  &__item {
    width: 260px;
    height: 260px;
    position: relative;

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
      position: absolute;
      top: 0;
      display: block;
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
