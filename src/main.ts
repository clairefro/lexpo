import Phaser from "phaser";

import LobbyScene from "./scenes/LobbyScene";
import ExpoScene from "./scenes/ExpoScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "canvas",
  scale: {
    mode: Phaser.Scale.ScaleModes.ENVELOP,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  callbacks: {
    postBoot: () => {
      window.sizeChanged();
    },
  },
  pixelArt: true,
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  scene: [LobbyScene, ExpoScene],
};

window.sizeChanged = () => {
  if (window?.game?.isBooted) {
    setTimeout(() => {
      window.game.scale.resize(window.innerWidth, window.innerHeight);

      window.game.canvas.setAttribute(
        "style",
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
      );
    }, 100);
  }
};

window.onresize = () => window.sizeChanged();

// export default new Phaser.Game(config);

new Phaser.Game(config);
