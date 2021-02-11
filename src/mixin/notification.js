export const NotifiCation = {
  methods: {
    // 提次訊息;
    NotifiCation(title, type, Meg) {
      this.$notify({
        title: title,
        type: type,
        message: Meg,
        showClose: true,
        offset: 80,
      })
    },
  },
}
export default NotifiCation
