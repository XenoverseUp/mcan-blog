import kebabize from "@/utils/kebabize"

describe("kebabize", () => {
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

  it("converts camelCase to kebab-case.", () => {
    expect(kebabize("redButton")).toBe("red-button")
    expect(kebabize("helloMyMan2")).toBe("hello-my-man2")
  })

  it("converts normal language case to kebab-case.", () => {
    expect(kebabize("Wanna play with me?")).toBe("wanna-play-with-me?")
  })

  it("converts PascalCase to kebab-case.", () => {
    expect(kebabize("PascalCase")).toBe("pascal-case")
  })

  it("converts ALLCAPS to kebab-case.", () => {
    expect(kebabize("ALLCAPITALS")).toBe("allcapitals")
  })

  it("converts snake_case to kebab-case.", () => {
    expect(kebabize("snake_case")).toBe("snake-case")
  })
})
