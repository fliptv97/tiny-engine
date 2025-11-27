import Canvas from "./engine/canvas.js";

export const GameState = {
  MAIN_MENU: "MAIN_MENU",
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
} as const;

class Game {
  #state = GameState.RUNNING;
  #keys = new Map<string, boolean>();
  #canvas: Canvas;

  constructor(canvas: Canvas) {
    this.#canvas = canvas;
  }

  get state() {
    return this.#state;
  }

  get keys() {
    return this.#keys;
  }

  init() {
    this.#canvas.node!.addEventListener("keydown", (event) => {
      this.#keys.set(event.code, true);
    });

    this.#canvas.node!.addEventListener("keyup", (event) => {
      if (!this.#keys.has(event.code)) return;

      this.#keys.set(event.code, false);
    });
  }
}

export default Game;
