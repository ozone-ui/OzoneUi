import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { Btn } from './'

describe('Button', () => {
  it('renders correct text', () => {
    const wrapper = mount(Btn, {
      props: { text: 'test' },
      slots: { default: 'test' },
    })
    console.log(wrapper.classes())
    expect(wrapper.text()).toBe('test')
  })
})
it('provides correct classes for default color button', () => {
  const defaultButtonClasses = [
    'px-[12px]',
    'py-[6px]',
    'rounded-[8px]',
    'font-bold',
    'text-[14px]',
    'flex',
    'items-center',
    'justify-center',
    'gap-x-[8px]',
    'hover:brightness-110',
    'transition-all',
    'duration-200',
    'w-fit',
  ]

  const wrapper = mount(Btn, { props: { color: '#fff' } })
  const classes = wrapper.classes()

  defaultButtonClasses.forEach((cl) => expect(classes).toContain(cl))
})
