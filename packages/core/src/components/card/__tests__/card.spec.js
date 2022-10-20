import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { Card } from './'
let wrapper

describe('Card', () => {
  beforeEach(() => {
    wrapper = mount(Card, {
      props: {
        title: 'The Settings',
      },
    })
  })

  it('is called', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

it('matches snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})

// props title with class card-title
it('has title', () => {
  expect(wrapper.html()).toContain('The Settings')
})
