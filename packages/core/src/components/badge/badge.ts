import { defineComponent, h, type PropType } from 'vue'

export const Badge = defineComponent({
  name: 'Badge',
  props: {
    bg: {
      type: String as PropType<string>,
      default: '#ECFDF3',
    },
    color: {
      type: String as PropType<string>,
      default: '#027A48',
    },
    w: {
      type: String as PropType<string>,
      default: 'fit-content',
    },
    h: {
      type: String as PropType<string>,
      default: 'fit-content',
    },
    p: {
      type: String as PropType<string>,
      default: '0.25rem 0.5rem',
    },
    rounded: {
      type: String as PropType<string>,
      default: 'rounded-full',
    },
    text: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    return h(
      'div',
      {
        class: [
          'flex items-center justify-center px-[8px] py-[2px] text-[12px] font-medium',
          this.w,
          this.h,
          this.p,
          this.rounded,
        ],
        style: {
          backgroundColor: this.bg,
          color: this.color,
        },
      },
      [this.text]
    )
  },
})

export type Badge = InstanceType<typeof Badge>
