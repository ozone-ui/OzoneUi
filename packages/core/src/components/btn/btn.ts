import { defineComponent, h, type PropType } from 'vue'
import { Icon } from '@iconify/vue'
import VWave from 'v-wave'

//  classes used by button UI components such as IconButton
const baseClasses =
  'px-[12px] py-[6px] rounded-[8px]  font-bold text-[14px] flex items-center justify-center gap-x-[8px] hover:brightness-110 transition-all duration-200  w-fit'
const textClasses =
  ' py-[6px]  font-bold text-[14px] flex items-center justify-center gap-x-[8px] hover:brightness-110 transition-all duration-200  w-fit'
const borderClasses =
  'px-[10px] py-[6px] rounded-[8px] font-bold text-[14px] flex items-center justify-center gap-x-[8px] border-[1.5px] w-fit hover:bg-white hover:text-black transition-all duration-200 '

const disabledClasses = 'text-[#1a2027] bg-[#0000001f]'

export const Btn = defineComponent({
  name: 'Btn',
  props: {
    btnType: {
      type: String as PropType<string>,
      default: 'primary',
    },
    text: {
      type: String as PropType<string>,
      default: '',
    },
    bg: {
      type: String as PropType<string>,
      default: '#073368',
    },
    color: {
      type: String as PropType<string>,
      default: '#000',
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
      default: '#000',
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    textBtn: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    link: {
      type: String as PropType<string>,
      default: '',
    },
  },
  diractive: [VWave],

  render() {
    return h(
      this.link ? 'a' : 'button',
      {
        class: this.border
          ? borderClasses
          : baseClasses
          ? this.textBtn
            ? textClasses
            : baseClasses
          : baseClasses,
        style: {
          background:
            this.border || this.textBtn
              ? ''
              : this.bg
              ? this.disabled
                ? '#0000001f'
                : this.bg
              : '#073368',
          color: this.disabled
            ? '#1A20276B'
            : this.border
            ? this.bg
            : this.color,
          borderColor: this.border ? this.bg : 'transparent',
          cursor: this.disabled ? 'auto' : 'pointer',
        },
        disabled: this.disabled,
        href: this.link || null,
        target: '_blank',

        // on click if not disabled or link
        onClick: () => {
          if (!this.disabled && !this.link) {
            this.$emit('click')
            console.log('clicked')
          }
        },
      },
      [
        this.startIcon &&
          h(Icon, {
            icon: this.startIcon,
            width: this.iconWidth,
            color: this.disabled
              ? '#1A20276B'
              : this.border
              ? this.bg
              : this.iconColor,
          }),
        this.text,
        this.endIcon &&
          h(Icon, {
            icon: this.endIcon,
            width: this.iconWidth,
            color: this.disabled
              ? '#1A20276B'
              : this.border
              ? this.bg
              : this.iconColor,
          }),
      ]
    )
  },
})
// emit click event

export type Btn = InstanceType<typeof Btn>
