A simple template for pixi.js using typescript & webpack without the need for any full frameworks like react or vue

Simply run:
1. `npm i`
2. `npm start`

Architecture:
/scripts :

/game - Contains all project specific files. 
Config.ts - Used for global variables, that can be accessed with App.config.x
Game.ts - Starting point of main game scene. Should be root for all the containers and main logic.

/structure/types - All type definitions should go here.

/system - Includes all the core logic for preloading the assets and starting up the Application.
App.ts - Starting point of application, runs Loader and then asynchronously starts PIXI.js App, setting the stage.
Loader.ts - Loads in all assets using PIXI.js Assets using v7 best practice.
    Any files in formats .png, .jpg or .ttf are automatically loaded from /assets. 
    Add or remove if you need to support any more file formats.
    Access any sprite using `App.sprite("nameOfSpriteWithNoExtension")`
Tools.ts - Store any global general purpose helper functions here.