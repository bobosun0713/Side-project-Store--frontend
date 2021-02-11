<template>
  <section class="home-info" :class="{ 'info-type': type }">
    <div class="home-info__container">
      <div class="info__img"></div>
      <div class="info__content">
        <p class="info__content-text">
          是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        </p>
        <p class="info__content-text">
          青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
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

  // ====== RWD  ======
  @include RWD_768 {
    margin-bottom: 125px;
  }

  &__container {
    width: 940px;
    max-height: 420px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s;

    // ====== RWD  ======
    @include RWD_1200 {
      width: 100%;
      max-height: 380px;
      justify-content: space-around;
    }
    @include RWD_768 {
      position: relative;
      flex-direction: column;
      max-height: unset;
    }
    @include RWD_576 {
    }
  }
}

// 圖片
.info__img {
  background: url('../../assets/image/home/info-1.jpg') no-repeat center center;
  background-size: cover;
  width: 460px;
  height: 460px;

  transition: all 0.5s;

  // ====== RWD  ======
  @include RWD_1200 {
    width: 400px;
    height: 400px;
  }
  @include RWD_768 {
    width: 100%;
    height: 350px;
  }
  @include RWD_576 {
    height: 250px;
  }
}

// 內容文字
.info__content {
  display: flex;

  // ====== RWD  ======
  @include RWD_768 {
    margin: 30px 0;
    flex-direction: column;
    align-items: center;
  }
  @include RWD_576 {
  }

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
      // ====== RWD  ======
      @include RWD_1200 {
        margin-right: 30px;
      }
      @include RWD_768 {
        margin-right: 0;
        margin-top: 10px;
        order: 2;
      }
    }

    // ====== RWD  ======
    @include RWD_768 {
      width: 90%;
      writing-mode: unset;
      height: auto;
    }
    @include RWD_576 {
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

  // ====== RWD  ======
  @include RWD_1200 {
    transform: translateY(-55px);
  }
  @include RWD_768 {
    background: url('../../assets/image/home/info-slogan-rwd-1.svg') no-repeat
      center center;
    transform: translateY(0);
    position: absolute;
    top: -115px;
    width: 196px;
    height: 100px;
  }
}

// =================================== 切換class ===================================
.info-type {
  // ====== RWD  ======
  @include RWD_768 {
    margin-bottom: 30px;
  }

  .home-info__container {
    flex-direction: row-reverse;

    // ====== RWD  ======
    @include RWD_768 {
      position: relative;
      flex-direction: column;
      max-height: unset;
    }

    .info__img {
      background: url('../../assets/image/home/info-2.jpg') no-repeat center
        center;
      background-size: cover;
    }
    .info__content {
      order: 1;
    }
    .info__slogan {
      background: url('../../assets/image/home/info-slogan-2.svg') no-repeat
        center;
      transform: translateY(-85px);

      // ====== RWD  ======
      @include RWD_1200 {
        transform: translateY(-65px);
      }
      @include RWD_768 {
        background: url('../../assets/image/home/info-slogan-rwd-2.svg')
          no-repeat center center;
        transform: translateY(0);
        top: -115px;
      }
    }
  }
}
</style>
