<template>
  <div class="product-card">
    <div class="card__header">
      <img class="card__header__img" :src="product.image" alt="" />
      <div class="card__header__title">
        {{ product.type }}
      </div>
      <button class="card__header__fav">
        <font-awesome :icon="['far', 'heart']" class="icon"></font-awesome>
      </button>
    </div>
    <div class="card__body">
      <div class="card__body__info">
        <div class="card__body__info-name">{{ product.name }}</div>
        <div class="card__body__info-price">NT$ {{ product.price }}</div>
      </div>
      <button
        type="button"
        class="card__body__button"
        @click="addToCart(product)"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Cookies from 'js-cookie'
import { collectionCart } from '@/db'
import NotifiCation from '@/mixin/notification.js'
export default {
  name: 'ProductCard',
  mixins: [NotifiCation],
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      userUID: Cookies.get('UID'),
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
  methods: {
    // 判斷是否登入
    checkUserInfo() {
      if (!this.userUID) {
        this.NotifiCation('未登入', 'error', '以跳轉至登入頁')
        this.$router.push('/login')
        return false
      }
      return true
    },
    addToCart(data) {
      if (!this.checkUserInfo()) return

      collectionCart
        .doc('1')
        .update({
          products: firebase.firestore.FieldValue.arrayUnion(data),
        })
        .then(() => {
          this.NotifiCation('成功', 'success', '已新增一筆至購物車')
        })
    },
  },
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
  width: 100%;
  height: 315px;

  display: flex;
  justify-content: space-between;
  position: relative;

  // img
  &__img {
    width: 100%;
    object-fit: cover;
  }

  // title
  &__title {
    position: absolute;
    padding: 16px 10px;
    left: 20px;
    background-color: map-get($theme-colors, dark-green);
    color: map-get($theme-colors, light);
    letter-spacing: 3px;
    writing-mode: tb-rl;
  }

  // fav
  &__fav {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
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
