<template>
  <header class="header">
    <button class="header__hamburger" @click="toggleMenu">
      <div class="header__hamburger-line"></div>
    </button>

    <h1 class="header__logo"></h1>

    <ul class="header__nav" :class="{ 'header__nav--active': isToggleMenu }">
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/">首頁</router-link>
      </li>
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/product"
          >甜點</router-link
        >
      </li>
      <li class="header__nav__item">
        <router-link
          v-if="!getUserInfo"
          class="header__nav__item-link"
          to="/login"
          >登入</router-link
        >
        <button v-else class="header__nav__item-link" @click="signOut">
          登出
        </button>
      </li>
      <li class="header__nav__item">
        <router-link class="header__nav__item-link" to="/shopping">
          <font-awesome icon="shopping-cart" class="icon "></font-awesome
        ></router-link>
      </li>
    </ul>

    <router-link class="header__rwd-cart-link" to="/shopping">
      <font-awesome icon="shopping-cart" class="icon "></font-awesome>
    </router-link>
  </header>
</template>

<script>
import { User } from '@/db'
import { mapGetters } from 'vuex'
import MessageDialog from '@/mixin/message.js'
export default {
  name: 'Header',
  mixins: [MessageDialog],
  data() {
    return {
      isToggleMenu: false,
    }
  },
  computed: {
    ...mapGetters(['getUserInfo']),
  },
  methods: {
    toggleMenu() {
      this.isToggleMenu = !this.isToggleMenu
    },
    signOut() {
      this.$confirm(`確定登出?`, '登出', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          User.signOut().then(() => {
            this.$store.dispatch('signOut')
            this.MessageDialog('success', '已登出', false)
          })
        })
        .catch(() => {
          this.MessageDialog('warning', '已取消登出', false)
        })
    },
  },
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

  // ====== RWD  ======
  @include RWD_1200 {
    padding: 30px;
    width: 100%;
  }
  @include RWD_768 {
    // position: relative;
    position: sticky;
    top: 0;
    z-index: 2;
    box-shadow: 0 1px 10px map-get($theme-colors, dark-green-opacity);
  }

  // 漢堡
  &__hamburger {
    background-color: transparent;
    width: 25px;
    height: 20px;
    display: none;

    // ====== RWD  ======
    @include RWD_768 {
      display: block;
    }

    &-line {
      position: relative;
      height: 3px;
      width: 100%;
      border-radius: 10px;
      background-color: map-get($theme-colors, dark-green);

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        border-radius: 10px;
        background-color: map-get($theme-colors, dark-green);
      }

      &:before {
        bottom: 8px;
      }
      &:after {
        bottom: -8px;
      }
    }
  }

  // logo
  &__logo {
    font-size: 0;
    background: url('../../assets/image/logo.svg') no-repeat center center;
    width: 220px;
    height: 40px;

    transition: all 0.5s;
    // ====== RWD  ======
    @include RWD_768 {
      background: url('../../assets/image/logo-rwd.svg') no-repeat center center;
      width: 115px;
      height: 20px;
    }
  }

  // menu
  &__nav {
    display: flex;

    transition: all 0.5s;
    // ====== RWD  ======
    @include RWD_768 {
      overflow: hidden;
      max-height: 0;
      position: absolute;
      background-color: map-get($theme-colors, light);
      width: 100%;
      top: 80px;
      left: 0;
      flex-direction: column;
    }

    &__item {
      &:not(:first-child) {
        margin-left: 60px;

        // ====== RWD  ======
        @include RWD_768 {
          margin-left: 0;
          &:last-child {
            display: none;
          }
        }
      }
      &-link {
        color: map-get($theme-colors, dark-green);
        font-size: map-get($fontSize, medium);
        font-weight: bold;

        &:hover {
          color: map-get($theme-colors, light-yellow);
        }
      }

      // ====== RWD  ======
      @include RWD_768 {
        border-top: 1px solid map-get($theme-colors, border);
        width: 100%;
        text-align: center;
        padding: 20px;
      }
    }

    // active
    &--active {
      max-height: 200px;
      // box-shadow: 0 3px 2px map-get($theme-colors, dark-green-opacity);
    }
  }

  // rwd-link
  &__rwd-cart-link {
    display: none;
    // ====== RWD  ======
    @include RWD_768 {
      display: block;
    }
  }
}
</style>
