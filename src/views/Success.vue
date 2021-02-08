<template>
  <div class="success">
    <img
      class="success__img"
      src="../assets/image/success/success-text.png"
      alt=""
    />
    <router-link class="success__link" to="/product">繼續逛逛</router-link>
  </div>
</template>

<script>
export default {
  name: 'Success',
}
</script>

<style lang="scss" scoped>
.success {
  background: url('../assets/image/success/success-banner.jpg') no-repeat center
    center;
  background-size: cover;
  width: 940px;
  height: 460px;
  margin: 0 auto 65px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // ====== RWD  ======
  @include RWD_991 {
    width: 100%;
  }
  @include RWD_499 {
    height: 520px;
    position: relative;
  }

  &__img {
    width: 190px;
  }

  &__link {
    text-align: center;
    width: 300px;
    display: block;
    padding: 16px;
    background-color: map-get($theme-colors, light-yellow);
    color: map-get($theme-colors, dark-green);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    transition: all 0.5s;

    &:hover {
      background-color: map-get($theme-colors, dark-green);
      color: map-get($theme-colors, light);
    }

    @include RWD_499 {
      // height: 520px;
      width: 100%;
      position: absolute;
      bottom: -65px;
    }
  }
}
</style>
