import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class Game {
    private mainWrapper: PIXI.Container;
    private bg: any;

    constructor() {
        this.mainWrapper = new PIXI.Container();
        this.createBackground();
    }

    private createBackground(): void {
        this.bg = App.sprite("bg") as PIXI.Sprite;
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.mainWrapper.addChild(this.bg);
    }
}
