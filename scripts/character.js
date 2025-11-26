import GameState from "./game-state.js";
import Vec2 from "./engine/vec2.js";

const GRAVITY = 0.9;
export const JUMP_STRENGTH = 10;

class Character {
  /** @type {GameState} */
  #gameState;
  /** @type {number} */
  #speed = 1.1;
  /** @type {boolean} */
  isGrounded = true;
  /** @type {number} */
  #width = 20;
  /** @type {number} */
  #height = 40;
  /** @type {Vec2} */
  position;
  /** @type {Vec2} */
  velocity = new Vec2(0, 0);

  /** @param {Vec2} position */
  constructor(gameState, position = new Vec2(0, 0)) {
    console.assert(gameState instanceof GameState);
    console.assert(position instanceof Vec2);

    this.#gameState = gameState;
    this.position = position;
  }

  get speed() {
    return this.#speed;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  update() {
    if (!this.isGrounded) {
      this.velocity.y *= GRAVITY;
    }

    if (this.#gameState.keys.Space && this.isGrounded) {
      this.velocity.y = 1;
      this.isGrounded = false;
    }

    if (this.#gameState.keys.ArrowRight) {
      this.velocity.x = 1;
    } else if (this.#gameState.keys.ArrowLeft) {
      this.velocity.x = -1;
    } else {
      this.velocity.x = 0;
    }
  }
}

export default Character;
