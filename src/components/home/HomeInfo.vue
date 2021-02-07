<template>
  <section class="home-info">
    <div class="home-info__container" :class="{ 'info-type': type }">
      <div class="info__img"></div>
      <div class="info__content">
        <p class="info__content-text">
          是非成敗轉頭空,滾滾長江東逝水,白髮漁樵江渚上,古今多少事,都付笑談中。
        </p>
        <p class="info__content-text">
          青山依舊在,幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢,浪花淘盡英雄。是非成敗轉頭空,滾滾長江東逝水,白髮漁樵江渚上,古今多少事,都付笑談中。
        </p>
      </div>
      <div class="info__slogan"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeInfo',
  props: {
    type: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.home-info {
  background-color: map-get($theme-colors, light-green);
  margin-bottom: 105px;
  &__container {
    width: 940px;
    max-height: 420px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

// 圖片
.info__img {
  background: url('../../assets/image/home/info-1.jpg') no-repeat center center;
  background-size: cover;
  width: 460px;
  height: 460px;
}

// 內容文字
.info__content {
  display: flex;
  &-text {
    height: 290px;
    color: #3f5d45e0;
    font-size: 16px;
    -ms-writing-mode: tb-rl;
    writing-mode: tb-rl;
    text-orientation: upright;
    line-height: 35px;
    letter-spacing: 0px;

    &:first-child {
      margin-right: 60px;
    }
  }
}

// slogan
.info__slogan {
  background: url('../../assets/image/home/info-slogan-1.svg') no-repeat center
    center;
  width: 90px;
  height: 300px;
  transform: translateY(-75px);
}

// =================================== 切換class ===================================
.info-type {
  flex-direction: row-reverse;
  .info__img {
    background: url('../../assets/image/home/info-2.jpg') no-repeat center
      center;
  }
  .info__content {
    order: 1;
  }
  .info__slogan {
    background: url('../../assets/image/home/info-slogan-2.svg') no-repeat
      center;
    transform: translateY(-85px);
  }
}
</style>
