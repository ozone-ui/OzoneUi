import { defineComponent, h, type PropType } from 'vue'
import { Icon } from '@iconify/vue'

//  classes used by button UI components such as IconButton
const baseClasses =
  'px-[20px] py-[30px] rounded-[15px] w-full h-fit flex flex-col'
const borderClasses =
  'px-[20px] py-[30px]  rounded-[15px]  border-[1px] bg-transparent flex flex-col'

export const Card = defineComponent({
  name: 'Card',
  props: {
    cardType: {
      type: String as PropType<string>,
      default: 'primary',
    },
    bg: {
      type: String as PropType<string>,
      default: '#f7f7f7',
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    title: {
      type: String as PropType<string>,
      default: '',
    },
    titleSize: {
      type: String as PropType<string>,
      default: 'text-[20px]',
    },
    titleFontWeight: {
      type: String as PropType<string>,
      default: 'font-bold',
    },
    titleColor: {
      type: String as PropType<string>,
      default: 'text-black',
    },
  },

  render() {
    return h(
      'div',
      {
        class: this.border ? borderClasses : baseClasses,
        style: {
          borderColor: this.border ? this.bg : 'transparent',
          background: this.border ? 'transparent' : this.bg,
        },
      },
      [
        h(
          'h1',
          {
            class: `${this.titleSize} ${this.titleFontWeight} ${this.titleColor}`,
          },
          this.title
        ),
        this.$slots.default?.(),
      ]
    )
  },
})
// emit click event

export type Card = InstanceType<typeof Card>
