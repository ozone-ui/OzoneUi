import { defineComponent, type PropType } from 'vue'
import { h } from 'vue'

export const Txt = defineComponent({
  name: 'Txt',
  props: {
    size: {
      type: String as PropType<string>,
      default: '14px',
    },
    fontWeight: {
      type: String as PropType<string>,
      default: 'normal',
    },
    color: {
      type: String as PropType<string>,
      default: '#000',
    },
    align: {
      type: String as PropType<string>,
      default: 'left',
    },
    text: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    return h(
      'p',
      {
        style: {
          fontSize: this.size,
          fontWeight: this.fontWeight,
          color: this.color,
          textAlign: this.align,
        },
      },
      this.text
    )
  },
})
