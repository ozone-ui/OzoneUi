import { defineComponent, h, type PropType } from 'vue'

export const Layout = defineComponent({
  name: 'Layout',
  props: {
    w: {
      type: String as PropType<string>,
      default: '1218px',
    },
  },
  render() {
    return h(
      'div',
      {
        class: 'mx-auto',
        style: {
          width: this.w,
        },
      },
      [this.$slots.default?.()]
    )
  },
})
