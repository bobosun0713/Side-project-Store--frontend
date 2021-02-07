<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__contact">
        <div class="footer__contact__address">
          <img
            class="footer__contact__address-img"
            src="../../assets/image/footer.svg"
            alt=""
          />
          <ul class="footer__contact__address-text">
            <li>07-1234-5678</li>
            <li>sweetaste@email.com</li>
            <li>800 高雄市新興區幸福路 520 號</li>
          </ul>
        </div>
        <div class="footer__contact__info">
          <img
            class="footer__contact__info-img"
            src="../../assets/image/footer-text.svg"
            alt=""
          />
        </div>
      </div>
      <div class="footer__copyright">
        <div class="footer__copyright__images">
          <img
            class="footer__copyright__images-icon"
            src="../../assets/image/icon/icon-mail.svg"
            alt=""
          />
          <img
            class="footer__copyright__images-icon"
            src="../../assets/image/icon/icon-fb.svg"
            alt=""
          />
        </div>
        <p class="footer__copyright__text">
          © 2021 Sweetaste* All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: map-get($theme-colors, light-green);

  &__container {
    width: calc(1024px - 200px);
    margin: 0 auto;

    // ====== RWD  ======
    @include RWD_1200 {
      width: 80%;
    }
  }

  &__contact {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;

    // 地址
    &__address {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-img {
        width: 170px;
        // ====== RWD  ======
        @include RWD_576 {
          margin-bottom: 40px;
        }
      }

      &-text {
        color: map-get($theme-colors, dark-green);
        font-size: map-get($fontSize, medium);
      }
    }

    // slogan
    &__info {
      font-size: 0;
      &-img {
        width: 60px;
        // ====== RWD  ======
        @include RWD_576 {
          display: none;
        }
      }
    }
  }

  &__copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    font-weight: bold;

    // ====== RWD  ======
    @include RWD_576 {
      align-items: unset;
      flex-direction: column;
    }

    &__images {
      display: flex;

      // ====== RWD  ======
      @include RWD_576 {
        margin-bottom: 20px;
      }

      &-icon {
        width: 32px;

        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
