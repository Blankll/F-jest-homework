describe("expect.equal", () => {
  test("TODO 1", () => {
    //  1: to replace "matcher"
    expect(1 + 1).toBe(2);
  });
  test("TODO 2", () => {
    //  2: to replace "matcher"
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });
  test("TODO 3", () => {
    //  3: to replace "matcher"
    expect(4).toBeGreaterThan(1);
  });
  test("TODO 4", () => {
    //  4: to replace "matcher"
    const fn = () => {};
    expect(fn).toBeInstanceOf(Function);
  });
  test("TODO 5", () => {
    //  5: to replace "matcher"
    expect(undefined).toBeUndefined();
  });
  test("TODO 6", () => {
    //  6: to replace "matcher"
    expect(null).toBeNull();
  });
  test("TODO 7", () => {
    //  7: to replace "matcher"
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
  });
  test("TODO 8", () => {
    //  8: to replace "matcher"
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  test("TODO 9", () => {
    //  9: to replace "expected" value
    class LaCroix {
      constructor(flavor) {
        this.flavor = flavor;
      }
    }
    expect(new LaCroix("lemon")).toEqual({ flavor: "lemon" });
  });
  test("TODO 10", () => {
    //  10: to replace "expected" value
    expect([1, 2, 3]).toHaveLength(3);
  });
});
