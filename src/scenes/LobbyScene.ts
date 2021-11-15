import Phaser from "phaser";
import { SceneKeys } from "../constants/sceneKeys";

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.LOBBY });
  }

  preload() {}

  create() {
    this.scene.start("expo", { foo: "foobar" });
  }
}
