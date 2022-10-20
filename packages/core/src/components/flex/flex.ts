import { defineComponent, type PropType } from 'vue'
import { h } from 'vue'

export const Flex = defineComponent({
  name: 'Flex',
  props: {
    col: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    j: {
      type: String as PropType<string>,
      default: '',
    },
    a: {
      type: String as PropType<string>,
      default: '',
    },
    g: {
      type: String as PropType<string>,
      default: '',
    },
    x: {
      type: String as PropType<string>,
      default: '',
    },
    y: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    return h(
      'div',
      {
        class: [
          'flex w-full h-fit',
          this.col ? 'flex-col' : '',
          this.g ? this.g : '',
          this.x ? this.x : '',
          this.y ? this.y : '',
          this.j ? this.j : '',
          this.a ? this.a : '',
        ],
      },
      [this.$slots.default?.()]
    )
  },
})
