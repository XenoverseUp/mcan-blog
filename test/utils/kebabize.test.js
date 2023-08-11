import kebabize from "@/utils/kebabize"

describe("Kebabize", () => {
  it("returns the same string if it is one word.", () => {
    expect(kebabize("hello")).toBe("hello")
    expect(kebabize("react")).toBe("react")
    expect(kebabize("next")).toBe("next")
  })

  it("return the lowercase version of one word strings.", () => {
    expect(kebabize("Hello")).toBe("hello")
    expect(kebabize("React")).toBe("react")
    expect(kebabize("Next")).toBe("next")
  })
  it.todo("converts camelCase to kebab-case.")
})
