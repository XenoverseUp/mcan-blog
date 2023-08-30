import subdivide from "@/lib/utils/subdivide"

describe("subdivide", () => {
  it("returns empty array when passed empty array.", () => {
    expect(subdivide([], 2)).toEqual([])
  })

  it("returns the same array as 0th element if array length is less than subdivision count.", () => {
    expect(subdivide([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 11).at(0).length).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].length,
    )

    expect(subdivide([1, 1, 1, 1, 1, 1, 1, 1, 1], 11).at(0)).toEqual([
      1, 1, 1, 1, 1, 1, 1, 1, 1,
    ])
  })

  it.todo("returns an array that is equal to the subdivision count.")
  it.todo(
    "the elements of returned array are the length of inputArrayLength/subdivisionCount.",
  )
})
