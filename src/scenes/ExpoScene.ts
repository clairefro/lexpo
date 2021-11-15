import Phaser from "phaser";
import { SceneKeys } from "../constants/sceneKeys";

// let controls;

export default class ExpoScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.EXPO });
  }

  preload() {
    this.load.setBaseURL("./assets");
    this.load.image("tiles-interior", "tilesets/Interiors_32x32.png");

    this.load.tilemapTiledJSON("map", "maps/lexpo_map.json");

    // this.load.image("logo", "monkey.png");
    // this.load.image("red", "monkey.png");
  }

  create() {
    this.add.image(500, 500, "tiles-interior");
    // const map = this.make.tilemap({
    //   key: "map",
    //   tileWidth: 32,
    //   tileHeight: 32,
    // });
    // const tilesInterior = map.addTilesetImage(
    //   "interior_tiles",
    //   "tiles-interior"
    // );
    // map.createLayer("Background", tilesInterior);

    // Phaser supports multiple cameras, but you can access the default camera like this:

    // const camera = this.cameras.main;
    // // Set up the arrows to control the camera
    // const cursors = this.input.keyboard.createCursorKeys();
    // controls = new Phaser.Cameras.Controls.FixedKeyControl({
    //   camera: camera,
    //   left: cursors.left,
    //   right: cursors.right,
    //   up: cursors.up,
    //   down: cursors.down,
    //   speed: 0.5,
    // });
    // // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    // Help text that has a "fixed" position on the screen
    // this.add
    //   .text(16, 16, "Arrow keys to scroll", {
    //     font: "18px monospace",
    //     padding: { x: 20, y: 10 },
    //     backgroundColor: "#000000",
    //   })
    //   .setScrollFactor(0);

    // const particles = this.add.particles("red");
    // const emitter = particles.createEmitter({
    //   speed: 100,
    //   scale: { start: 1, end: 0 },
    //   blendMode: "ADD",
    // });
    // const logo = this.physics.add.image(400, 100, "logo");
    // logo.setVelocity(400, 400);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
    // emitter.startFollow(logo);
  }
  // update(_time, delta) {
  //   controls.update(delta);
  // }
}
