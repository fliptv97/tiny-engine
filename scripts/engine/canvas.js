class Canvas {
  /** @type {number} */
  #width;
  /** @type {number} */
  #height;
  /** @type {HTMLCanvasElement|null} */
  #node = null;
  /** @type {CanvasRenderingContext2D|null} */
  #ctx = null;

  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    console.assert(typeof width === "number");
    console.assert(typeof height === "number");

    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get node() {
    return this.#node;
  }

  get ctx() {
    return this.#ctx;
  }

  /** @param {HTMLElement} parentNode */
  init(parentNode) {
    console.assert(parentNode instanceof HTMLElement);

    this.#node = document.createElement("canvas");
    this.#ctx = this.#node.getContext("2d");

    this.#node.style.outline = "1px solid #666";
    this.#node.style.outlineOffset = "2px";
    this.#node.tabIndex = 0;
    this.#node.width = this.#width;
    this.#node.height = this.#height;

    parentNode.appendChild(this.#node);
  }

  fill(color) {
    this.#ctx.fillStyle = color;
    this.#ctx.fillRect(0, 0, this.#width, this.#height);
  }
}

export default Canvas;
