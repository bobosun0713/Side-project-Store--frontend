<template>
  <div class="login">
    <form class="login-form">
      <h1 class="login-form__title">會員登入</h1>
      <div class="login-form__item">
        <font-awesome :icon="['fas', 'user']" class="icon"></font-awesome>
        <input
          class="login-form__item-input"
          type="text"
          placeholder="電子信箱/手機號碼"
        />
      </div>
      <div class="login-form__item">
        <font-awesome :icon="['fas', 'key']" class="icon"></font-awesome>
        <input
          class="login-form__item-input"
          type="text"
          placeholder="請輸入使用者密碼"
        />
      </div>
      <div class="login-form__item">
        <input
          id="remember"
          type="checkbox"
          class="login-form__item-checkbox"
        />
        <label for="remember" class="login-form__item-label">記住我</label>
      </div>
      <button type="button" class="login-form__button">登入帳號</button>
    </form>
    <div class="login-other">
      <h2 class="login-other__title">連結社群帳號</h2>
      <div class="login-other__link">
        <img
          class="login-other__link-img"
          src="../assets/image/login/login-fb.png"
          alt=""
        />
      </div>
      <div class="login-other__link">
        <img
          class="login-other__link-img"
          src="../assets/image/login/login-google.png"
          alt=""
        />
      </div>
      <div class="login-other__link">
        <img
          class="login-other__link-img"
          src="../assets/image/login/login-yahoo.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped>
.login {
  margin: 30px 0 60px;

  display: flex;
  justify-content: center;
  text-align: center;

  // 會員登入
  &-form {
    width: 390px;
    background-color: map-get($theme-colors, dark-green);

    // 標題
    &__title {
      padding: 40px 0;
      color: map-get($theme-colors, light);
    }

    // item
    &__item {
      margin: 0 auto;
      width: 330px;
      height: 56px;
      margin-bottom: 15px;
      position: relative;

      &:nth-of-type(3) {
        height: auto;
        text-align: left;
        margin-bottom: 20px;
      }

      // 輸入框
      &-input {
        background-color: map-get($theme-colors, light-green);
        border: 0;
        padding-left: 55px;
        height: 100%;
        width: 100%;
      }

      // checkbox
      &-label {
        font-weight: bold;
        color: map-get($theme-colors, light);
        vertical-align: middle;
        margin-left: 8px;
      }
      &-checkbox {
        vertical-align: middle;
        width: 16px;
        height: 16px;
        background-color: map-get($theme-colors, light-green);
      }

      // icon
      .icon {
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }

    // 按鈕
    &__button {
      cursor: pointer;
      width: 390px;
      border: 0;
      padding: 16px;
      background-color: map-get($theme-colors, light-yellow);
      font-size: map-get($fontSize, large);
      font-weight: bold;
      transition: all 0.5s;

      &:hover {
        background-color: map-get($theme-colors, light-green);
      }
    }
  }

  // 連結登入
  &-other {
    background-color: map-get($theme-colors, light-green);
    width: 390px;
    align-self: center;

    // 標題
    &__title {
      margin: 40px auto 35px;
      width: 256px;
      position: relative;
      color: map-get($theme-colors, dark-green);

      &:before,
      &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 40px;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background-color: map-get($theme-colors, dark-green);
      }

      &:after {
        left: unset;
        right: 0;
      }
    }

    // 社群連結
    &__link {
      cursor: pointer;
      margin: 0 auto;
      width: 330px;
      height: 56px;
      background-color: map-get($theme-colors, light);

      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:first-child) {
        margin-top: 16px;
      }
      &:last-child {
        margin-bottom: 40px;
      }

      &-img {
        width: 100px;
        filter: grayscale(1);
      }

      &:hover &-img {
        filter: grayscale(0);
      }
    }
  }
}
</style>
