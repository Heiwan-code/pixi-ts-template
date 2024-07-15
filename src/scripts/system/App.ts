import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";

class Application {
    public config!: IConfig;
    private app!: PIXI.Application;
    private loader!: Loader;
    private scene!: { mainWrapper: PIXI.Container };

    run(config: any): void {
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        this.config = config;

        this.app = new PIXI.Application();
        // globalThis.__PIXI_APP__ = this.app; // Enable for debuging with chrome pixi.js plugin

        this.loader = new Loader(this.config);
        this.loader.preload().then(() => this.startAsync());
    }

    res(key: string): PIXI.Texture | undefined {
        return this.loader.resources[key].texture;
    }

    sprite(key: string): PIXI.Sprite {
        let sprite = PIXI.Sprite.from(key);

        return sprite;
    }

    async startAsync() {
        await this.app.init({
            resizeTo: window,
            view: document.createElement('canvas')
        });
        document.body.appendChild(this.app.canvas);

        this.scene = new this.config["startScene"]();
        this.app.stage.addChild(this.scene.mainWrapper);
    }
}

export const App = new Application();
