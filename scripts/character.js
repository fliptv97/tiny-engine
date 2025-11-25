import GameState from "./game-state.js";
import Vec2 from "./engine/vec2.js";

class Character {
  /** @type {GameState} */
  #gameState;
  /** @type {number} */
  #speed = 1.1;
  /** @type {Vec2} */
  position;

  /** @param {Vec2} position */
  constructor(gameState, position = new Vec2(0, 0)) {
    console.assert(gameState instanceof GameState);
    console.assert(position instanceof Vec2);

    this.#gameState = gameState;
    this.position = position;
  }

  get width() {
    return 20;
  }

  get height() {
    return 40;
  }

  update() {
    if (this.#gameState.keys.ArrowLeft) {
      this.position.x -= this.#speed;
    } else if (this.#gameState.keys.ArrowRight) {
      this.position.x += this.#speed;
    }
  }
}

export default Character;
