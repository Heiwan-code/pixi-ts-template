import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config: IConfig = {
  // LOADER: Do not change this
  loader: Tools.massiveRequire(
    require.context('./../../assets/', true, /\.(mp3|png|jpe?g)$/)
  ),
  // Start Scene: Starting Point for Game
  startScene: Game
};