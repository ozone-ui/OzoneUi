import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { Btn } from "..";
let wrapper;

describe("Btn", () => {
  beforeEach(() => {
    wrapper = mount(Btn, {
      props: {
        text: "test",
        bg: "red",
      },
    });
  });

  it("is called", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("matches snapshot", () => {
  expect(wrapper.html()).toMatchSnapshot();
});
