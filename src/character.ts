import GameState from "./game-state.js";
import Vec2 from "./engine/vec2.js";

const GRAVITY = 0.9;
export const JUMP_STRENGTH = 10;

class Character {
  #gameState: GameState;
  #speed: number;
  #width: number;
  #height: number;
  isGrounded: boolean;
  velocity: Vec2;
  position: Vec2;

  constructor(gameState: GameState, position = new Vec2(0, 0)) {
    this.#gameState = gameState;
    this.#speed = 1.1;
    this.#width = 20;
    this.#height = 40;

    this.isGrounded = true;
    this.velocity = new Vec2(0, 0);
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

    if (this.#gameState.keys.get("Space") && this.isGrounded) {
      this.velocity.y = 1;
      this.isGrounded = false;
    }

    if (this.#gameState.keys.get("ArrowRight")) {
      this.velocity.x = 1;
    } else if (this.#gameState.keys.get("ArrowLeft")) {
      this.velocity.x = -1;
    } else {
      this.velocity.x = 0;
    }
  }
}

export default Character;
