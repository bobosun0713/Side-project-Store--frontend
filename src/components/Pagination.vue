<template>
  <div class="pagination">
    <button class="pagination__button">
      <font-awesome icon="caret-left" class="icon "></font-awesome>
    </button>
    <ul class="pager">
      <li class="pager__number">1</li>
      <li class="pager__number">2</li>
      <li class="pager__number">3</li>
    </ul>
    <button class="pagination__button">
      <font-awesome icon="caret-right" class="icon "></font-awesome>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin-left: auto;

  // ====== RWD  ======
  @include RWD_991 {
    margin-left: 0;
  }
  &__button {
    width: 60px;
    height: 60px;
    border: 1px solid map-get($theme-colors, border);
    background-color: transparent;
  }
}

// 頁碼
.pager {
  cursor: pointer;
  display: flex;
  &__number {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid map-get($theme-colors, border);
    color: map-get($theme-colors, dark-green);
    font-weight: bold;
    border-right: 0;

    &:first-child {
      border-left: 0;
    }
  }
}
</style>
