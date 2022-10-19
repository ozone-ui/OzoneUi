import {defineComponent, h, type PropType} from 'vue'
import { Icon } from "@iconify/vue";

const baseClasses = 'px-[12px] py-[6px] rounded-[8px] text-white font-bold text-[14px] flex items-center justify-center gap-x-[8px]'


export const Btn = defineComponent({
    name: 'Btn',
    props: {
        text: {
            type: String as PropType<string>,
            required: true
        },
        bg: {
            type: String as PropType<string>,
            default: '#073368'
        },
        color: {
            type: String as PropType<string>,
            default: '#fff'
        },
        startIcon: {
            type: String as PropType<string>,
            default: ''
        },
        endIcon: {
            type: String as PropType<string>,
            default: ''
        },
            iconWidth: {
                type: String as PropType<string>,
                default: '24px'
            },
            iconColor: {
                type: String as PropType<string>,
                default: '#fff'
            }

    },
        
    render() {
        return h('button', {
            class: baseClasses,
            style: {
                background: this.bg,
                color: this.color
            }
        }, [
            this.startIcon && h(Icon, {
               
                icon: this.startIcon,
                width: this.iconWidth,
                color: this.iconColor
       
                
            }),
            this.text,
            this.endIcon && h(Icon, {
                icon: this.endIcon,
                width: this.iconWidth,
                color: this.iconColor

                })
        ])


        
    }

  
})
export type Btn = InstanceType<typeof Btn>
