import Phaser from "phaser";
import { PLAYER_SPEED } from "../constants/player";
import { SceneKeys } from "../constants/sceneKeys";

export default class ExpoScene extends Phaser.Scene {
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  player?: Phaser.GameObjects.Sprite;

  constructor() {
    super({ key: SceneKeys.EXPO });
  }

  preload() {
    this.load.setBaseURL("./assets");
    /** TILESETS */
    this.load.image("tiles-interior", "tilesets/Interiors_free_32x32.png");
    this.load.image("tiles-walls", "tilesets/Room_Builder_3d_walls_32x32.png");
    /** SPRITES */
    this.load.image("player", "sprites/gerenuk.png");

    this.load.tilemapTiledJSON("map", "maps/lexpo-map.json");

    // this.load.image("logo", "monkey.png");
    // this.load.image("red", "monkey.png");
  }

  create() {
    // this.add.image(500, 500, "tiles-walls");
    const map = this.make.tilemap({
      key: "map",
      tileWidth: 32,
      tileHeight: 32,
    });
    const tilesInterior = map.addTilesetImage(
      "Interiors_free_32x32",
      "tiles-interior"
    );
    const tilesWalls = map.addTilesetImage(
      "Room_Builder_3d_walls_32x32",
      "tiles-walls"
    );

    map.createLayer("Background", tilesInterior);
    const layerWalls = map.createLayer("Walls", tilesWalls);
    const layerBlocked = map.createLayer("Blocked", tilesInterior);

    // set collision for non-empty tiles in certain layers
    layerWalls.setCollisionByExclusion([-1]);
    layerBlocked.setCollisionByExclusion([-1]);

    this.player = this.physics.add.sprite(100, 100, "player");
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player, layerWalls);
    this.physics.add.collider(this.player, layerBlocked);
  }
  update(_time, _delta) {
    if (this.cursors && this.player && "setVelocity" in this.player.body) {
      /** X-CONTROLS */
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-PLAYER_SPEED);
        // this.player.anims.play("left", true);
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(PLAYER_SPEED);
        // this.player.anims.play("right", true);
      } else {
        this.player.body.setVelocityX(0);
        // this.player.anims.play("idle", true);
      }
      /** Y-CONTROLS */
      if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-PLAYER_SPEED);
      } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(PLAYER_SPEED);
        // this.player.anims.play("right", true);
      } else {
        this.player.body.setVelocityY(0);
        // this.player.anims.play("right", true);
      }
    }
  }
}
