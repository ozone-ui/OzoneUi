import { defineComponent, h, type PropType } from 'vue'
import { Icon } from '@iconify/vue'

//  classes used by button UI components such as IconButton
const baseClasses =
  'px-[12px] py-[6px] rounded-[8px] text-white font-bold text-[14px] flex items-center justify-center gap-x-[8px] hover:brightness-110 transition-all duration-200 active:brightness-90'
const borderClasses =
  'px-[10px] py-[6px] rounded-[8px] font-bold text-[14px] flex items-center justify-center gap-x-[8px] border-[2px]'

export const Btn = defineComponent({
  name: 'Btn',
  props: {
    btnType: {
      type: String as PropType<string>,
      default: 'primary',
    },
    text: {
      type: String as PropType<string>,
      required: true,
    },
    bg: {
      type: String as PropType<string>,
      default: '#073368',
    },
    color: {
      type: String as PropType<string>,
      default: '#fff',
    },
    startIcon: {
      type: String as PropType<string>,
      default: '',
    },
    endIcon: {
      type: String as PropType<string>,
      default: '',
    },
    iconWidth: {
      type: String as PropType<string>,
      default: '24px',
    },
    iconColor: {
      type: String as PropType<string>,
      default: '#fff',
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  render() {
    return h(
      'button',
      {
        class: this.border ? borderClasses : baseClasses,
        style: {
          background: this.border ? 'transparent' : this.bg,
          color: this.border ? this.bg : this.color,
          borderColor: this.border ? this.bg : 'transparent',
        },
        // habdle click when button is clicked
        onClick: () => {
          console.log('clicked')
        },
      },
      [
        this.startIcon &&
          h(Icon, {
            icon: this.startIcon,
            width: this.iconWidth,
            color: this.border ? this.bg : this.iconColor,
          }),
        this.text,
        this.endIcon &&
          h(Icon, {
            icon: this.endIcon,
            width: this.iconWidth,
            color: this.border ? this.bg : this.iconColor,
          }),
      ]
    )
  },
})
// emit click event

export type Btn = InstanceType<typeof Btn>
