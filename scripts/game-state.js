import Canvas from "./engine/canvas.js";

export const GameState = Object.freeze({
  MAIN_MENU: "MAIN_MENU",
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
});

class Game {
  #state = GameState.RUNNING;
  #keys = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
  };
  /** @type {Canvas} */
  #canvas;

  /** @param {Canvas} canvas */
  constructor(canvas) {
    console.assert(canvas instanceof Canvas);

    this.#canvas = canvas;
  }

  get state() {
    return this.#state;
  }

  get keys() {
    return this.#keys;
  }

  init() {
    this.#canvas.node.addEventListener("keydown", (event) => {
      if (!Object.hasOwn(this.#keys, event.code)) return;

      this.#keys[event.code] = true;
    });

    this.#canvas.node.addEventListener("keyup", (event) => {
      if (!Object.hasOwn(this.#keys, event.code)) return;

      this.#keys[event.code] = false;
    });
  }
}

export default Game;
