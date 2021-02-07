<template>
  <header class="header">
    <h1 class="header__logo">
      <img class="header__logo-img" src="../../assets/image/logo.svg" alt="" />
    </h1>

    <ul class="header__nav">
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/">首頁</router-link>
      </li>
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/product"
          >甜點</router-link
        >
      </li>
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/login"
          >登入</router-link
        >
      </li>
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/shopping">
          <font-awesome icon="shopping-cart" class="icon "></font-awesome
        ></router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  padding: 30px 0;
  width: 940px;
  margin: 0 auto;
  background-color: map-get($theme-colors, light);

  display: flex;
  align-items: center;
  justify-content: space-between;

  // logo
  &__logo {
    font-size: 0;
    &-img {
      width: 220px;
    }
  }

  // menu
  &__nav {
    display: flex;
    &__item {
      &:not(:first-child) {
        margin-left: 60px;
      }
      &-link {
        color: map-get($theme-colors, dark-green);
        font-size: map-get($fontSize, medium);
        font-weight: bold;

        &:hover {
          color: map-get($theme-colors, light-yellow);
        }
      }
    }
  }
}
</style>
