class Canvas {
  private _node: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  constructor(
    private _width: number,
    private _height: number,
  ) {}

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get node() {
    if (this._node === null) {
      throw new Error("Canvas isn't initialized");
    }

    return this._node;
  }

  get ctx() {
    if (this._ctx === null) {
      throw new Error("Canvas isn't initialized");
    }

    return this._ctx;
  }

  init(parentNode: HTMLElement) {
    this._node = document.createElement("canvas");
    this._ctx = this._node.getContext("2d");

    this._node.style.outline = "1px solid #666";
    this._node.style.outlineOffset = "2px";
    this._node.tabIndex = 0;
    this._node.width = this._width;
    this._node.height = this._height;

    parentNode.appendChild(this._node);
  }

  fill(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this._width, this._height);
  }
}

export default Canvas;
