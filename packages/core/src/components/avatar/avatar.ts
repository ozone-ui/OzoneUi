import { defineComponent, h, type PropType } from 'vue'

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    src: {
      type: String as PropType<string>,
      default: 'https://i.pravatar.cc/150?img=1',
    },
    size: {
      type: String as PropType<string>,
      default: 'w-[40px] h-[40px]',
    },
  },
  render() {
    return h(
      'div',
      {
        class: [
          'flex items-center justify-center',
          this.size,
          'rounded-full overflow-hidden object-cover hover:border-[2px] hover:border-[#9484F7] cursor-pointer transition-all duration-100 ease-in-out',
        ],
      },
      [
        h('img', {
          src: this.src,
          class: 'w-full h-full',
        }),
      ]
    )
  },
})

export type Avatar = InstanceType<typeof Avatar>
