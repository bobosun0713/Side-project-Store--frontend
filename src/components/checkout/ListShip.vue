<template>
  <ul class="list-ship">
    <li class="list-ship__list">
      <div class="ship-item">
        <label for="" class="ship-item__title">姓氏</label>
        <input type="text" class="ship-item__input" />
      </div>
      <div class="ship-item">
        <label for="" class="ship-item__title">名子</label>
        <input type="text" class="ship-item__input" />
      </div>
    </li>
    <li class="list-ship__list">
      <div class="ship-item">
        <label for="" class="ship-item__title">電話</label>
        <input type="text" class="ship-item__input" />
      </div>
    </li>
    <li class="list-ship__list">
      <div class="ship-item">
        <label for="" class="ship-item__title">地址</label>
        <input type="text" class="ship-item__input" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListShip',
}
</script>

<style lang="scss" scoped>
.list-ship {
  width: 380px;
  margin: 0 auto;

  &__list {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

.ship-item {
  margin-right: 5px;
  width: 100%;
  &__title {
    display: block;
    color: map-get($theme-colors, light-green);
    font-weight: bold;
    margin-bottom: 5px;
  }
  &__input {
    border: 0;
    background-color: map-get($theme-colors, light-green);
    padding: 16px;
    width: 100%;
  }
}
</style>
