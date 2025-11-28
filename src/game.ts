import Character from "./character.js";
import Canvas from "./engine/canvas.js";
import GameState from "./game-state.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = new Canvas(800, 600);

  canvas.init(document.body);
  canvas.fill("#333");

  const gameState = new GameState(canvas);

  gameState.init();

  const character = new Character(
    20,
    canvas.height - Character.HEIGHT,
    gameState,
  );

  canvas.node.focus();

  requestAnimationFrame(function gameLoop() {
    character.update();

    canvas.fill("#333");

    // Draw character
    canvas.ctx.fillStyle = "#f00";
    canvas.ctx.fillRect(
      character.positionX,
      character.positionY,
      Character.WIDTH,
      Character.HEIGHT,
    );

    requestAnimationFrame(gameLoop);
  });
});
