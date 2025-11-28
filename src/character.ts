import GameState from "./game-state.js";

const GRAVITY = 1.2;
const FRICTION = 0.75;

class Character {
  static JUMP_STRENGTH = 20;
  static WIDTH = 20;
  static HEIGHT = 40;
  static SPEED = 2.75;

  private _speedX = 0;
  private _speedY = 0;

  constructor(
    private _positionX: number,
    private _positionY: number,
    private _gameState: GameState,
  ) {}

  get positionX() {
    return this._positionX;
  }

  get positionY() {
    return this._positionY;
  }

  move(deltaX: number, deltaY: number) {
    this._positionX += deltaX;
    this._positionY += deltaY;
  }

  accelerate(accelerationX: number, accelerationY: number) {
    this._speedX += accelerationX;
    this._speedY += accelerationY;
  }

  update() {
    // Hotfix, so that character doesn't go outside of screen
    if (this._positionY >= 560) {
      this._speedY = 0;
      this._positionY = 560;
    }

    // Input handlers
    if (this._gameState.keys.get("Space") && this._speedY === 0) {
      this._speedY -= Character.JUMP_STRENGTH;
    }

    if (this._gameState.keys.get("ArrowRight")) {
      this._speedX = Character.SPEED;
    } else if (this._gameState.keys.get("ArrowLeft")) {
      this._speedX = -Character.SPEED;
    }

    // Core
    this.move(this._speedX, this._speedY);

    this._speedX *= FRICTION;
    this._speedY *= FRICTION;

    this.accelerate(0, GRAVITY);
  }
}

export default Character;
