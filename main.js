"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uxp_1 = require("uxp");
const scene_explorer_1 = require("./src/scene-explorer");
async function toTypescript(selection) {
    const entities = scene_explorer_1.SceneExplorer.exploreSelection(selection);
    const folder = await uxp_1.storage.localFileSystem.getFolder();
    const file = await folder.createFile(Date.now() + "-entities.ts");
    file.write(entities.map(e => e.toTypescript()).join(''));
}
async function toJson(selection) {
    const entities = scene_explorer_1.SceneExplorer.exploreSelection(selection);
    const folder = await uxp_1.storage.localFileSystem.getFolder();
    const file = await folder.createFile(Date.now() + "-entities.json");
    file.write(entities.map(e => JSON.stringify(e.toJSON())).join(''));
}
(module).exports = {
    commands: {
        createRectangle: toTypescript,
        createEllipse: toJson
    }
};
