<template>
  <div class="subscription">
    <div class="subscription__container">
      <div class="subscription__info">
        <img
          class="subscription__info-img"
          src="../../assets/image/subscription.svg"
          alt=""
        />
        <span class="subscription__info-text">訂閱你我的甜蜜郵件</span>
      </div>
      <div class="subscription__mail">
        <font-awesome
          icon="envelope"
          class="icon subscription__mail-icon"
        ></font-awesome>
        <input class="subscription__mail-input" type="text" />
        <button class="subscription__mail-button">
          <font-awesome icon="arrow-right" class="icon "></font-awesome>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubScription',
}
</script>

<style lang="scss" scoped>
.subscription {
  background-color: map-get($theme-colors, dark-green);
  padding: 40px 0;

  &__container {
    width: calc(1024px - 200px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // ====== RWD  ======
    @include RWD_1200 {
      width: 80%;
    }
    @include RWD_768 {
      flex-direction: column;
    }
  }
}

// 文字
.subscription__info {
  display: flex;
  align-items: center;

  // ====== RWD  ======
  @include RWD_768 {
    margin-bottom: 30px;
  }

  &-img {
    width: 40px;
    height: 40px;
  }
  &-text {
    color: map-get($theme-colors, light);
    font-size: map-get($fontSize, large);
    margin-left: 20px;
  }
}

.subscription__mail {
  display: flex;
  position: relative;

  // icon
  &-icon {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    font-size: map-get($fontSize, large);
  }

  &-input {
    border: 0;
    width: 320px;
    height: 55px;
    padding: 16px 0 16px 50px;
    background-color: map-get($theme-colors, light-green);
    transition: all 0.5s;

    // ====== RWD  ======
    @include RWD_576 {
      width: 250px;
    }
  }
  &-button {
    border: 0;
    cursor: pointer;
    background-color: map-get($theme-colors, light-yellow);
    width: 60px;
    height: 55px;
  }
}
</style>
