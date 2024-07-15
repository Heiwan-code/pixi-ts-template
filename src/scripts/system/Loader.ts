import * as PIXI from "pixi.js";

export class Loader {
    private config: IConfig;
    public resources: { [key: string]: PIXI.Sprite };

    constructor(config: IConfig) {
        this.config = config;
        this.resources = {};
    }

    async preload(): Promise<void> {
        const keys = [];
        for (const asset of this.config.loader) {
            let key = asset.key.substr(asset.key.lastIndexOf('/') + 1);
            key = key.substring(0, key.indexOf('.'));
            if (asset.key.indexOf(".png") !== -1 || asset.key.indexOf(".jpg") !== -1 || asset.key.indexOf(".ttf") !== -1) {
                PIXI.Assets.add({alias: key, src: asset.data.default});
                keys.push(key);
            }
        }

        return PIXI.Assets.load(keys);
    }
}
