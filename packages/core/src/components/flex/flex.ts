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
    wrap: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    w: {
      type: String as PropType<string>,
      default: '',
    },
    h: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    return h(
      'div',
      {
        class: [
          'flex h-fit',
          this.col ? 'flex-col' : '',
          this.wrap ? 'flex-wrap' : '',
        ],
        style: {
          justifyContent: this.j,
          alignItems: this.a,
          gap: `${this.g}px`,
          rowGap: `${this.y}px`,
          columnGap: `${this.x}px`,
          width: `${this.w}px`,
          height: `${this.h}px`,
        },
      },
      [this.$slots.default?.()]
    )
  },
})
