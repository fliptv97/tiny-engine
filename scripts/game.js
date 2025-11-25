import Canvas from "./engine/canvas.js";
import Character from "./character.js";
import GameState from "./game-state.js";

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

    if (character.position.x < 0) {
      character.position.x = 0;
    } else if (character.position.x + character.width > canvas.width) {
      character.position.x = canvas.width - character.width;
    }

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
