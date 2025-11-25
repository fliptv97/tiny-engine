class Vec2 {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    console.assert(typeof x === "number");
    console.assert(typeof y === "number");

    this.x = x;
    this.y = y;
  }
}

export default Vec2;
