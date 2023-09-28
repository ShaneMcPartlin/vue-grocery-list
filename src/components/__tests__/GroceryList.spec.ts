import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import GroceryList from "../GroceryList.vue"

describe("GroceryList", () => {
  it("renders properly with an empty list", () => {
    const wrapper = mount(GroceryList)
    expect(wrapper.text()).toContain("The list is empty")
    expect(wrapper.text()).toContain("Show deleted items")
  })

  it("Changes button text when clicked", async () => {
    const wrapper = mount(GroceryList)
    const button = wrapper.get("button")
    await button.trigger("click")

    expect(button.text()).toBe("Hide deleted items")
  })

  it("Changes the button back when clicked twice", async () => {
    const wrapper = mount(GroceryList)
    const button = wrapper.get("button")
    await button.trigger("click")

    expect(button.text()).toBe("Hide deleted items")
    await button.trigger("click")
    expect(button.text()).toBe("Show deleted items")
  })

  it("removes the empty list message when the list isn't empty", async () => {
    const wrapper = mount(GroceryList)
    const input = wrapper.get("input")
    console.log(input.placeholder)

    // expect(input.placeholder).toBe("")
  })
})
