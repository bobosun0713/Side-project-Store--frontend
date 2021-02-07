<template>
  <ul class="list-pay">
    <li class="list-pay__list">
      <label class="list-pay__list-title">信用卡卡號</label>
      <input type="text" class="list-pay__list-input" />
    </li>
    <li class="list-pay__list">
      <label class="list-pay__list-title">持卡人姓名</label>
      <input type="text" class="list-pay__list-input" />
      <input type="text" class="list-pay__list-input" />
    </li>
    <li class="list-pay__list">
      <label class="list-pay__list-title">有效期限</label>
      <input type="text" class="list-pay__list-input" />
      <input type="text" class="list-pay__list-input" />
    </li>
    <li class="list-pay__list">
      <label class="list-pay__list-title">背後末三碼</label>
      <input type="text" class="list-pay__list-input" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListPay',
}
</script>

<style lang="scss" scoped>
.list-pay {
  width: 380px;
  margin: 0 auto;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 16px;
    }

    // 標題
    &-title {
      display: block;
      color: map-get($theme-colors, light-green);
      margin-bottom: 5px;
      font-weight: bold;
      width: 100%;
    }

    // 輸入框
    &:first-child &-input {
      width: 100%;
    }
    &-input {
      border: 0;
      background-color: map-get($theme-colors, light-green);
      padding: 16px;
      &:not(:first-child) {
        width: 49%;
      }
    }
  }
}
</style>
