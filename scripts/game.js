import Canvas from "./engine/canvas.js";
import Character, { JUMP_STRENGTH } from "./character.js";
import GameState from "./game-state.js";

function clamp(value, min, max) {
  console.assert(typeof value === "number");
  console.assert(typeof min === "number");
  console.assert(typeof max === "number");

  return Math.min(max, Math.max(min, value));
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = new Canvas(800, 600);

  canvas.init(document.body);
  canvas.fill("#333");

  const gameState = new GameState(canvas);

  gameState.init();

  const character = new Character(gameState);

  character.position.x = 20;
  character.position.y = canvas.height - character.height;

  canvas.node.focus();

  requestAnimationFrame(function gameLoop() {
    // Logic
    character.update();

    character.position.x = clamp(
      character.position.x + character.velocity.x * character.speed,
      0,
      canvas.width - character.width
    );
    character.position.y = clamp(
      character.position.y - character.velocity.y * JUMP_STRENGTH,
      0,
      canvas.height - character.height
    );

    // Rendering
    canvas.fill("#333");

    canvas.ctx.fillStyle = "#f00";
    canvas.ctx.fillRect(
      character.position.x,
      character.position.y,
      character.width,
      character.height
    );

    requestAnimationFrame(gameLoop);
  });
});
