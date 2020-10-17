import { storage } from 'uxp';

import { SceneExplorer } from './src/scene-explorer';

async function toTypescript(selection: Selection) {

    const entities = SceneExplorer.exploreSelection(selection);

    const folder = await storage.localFileSystem.getFolder();
    const file = await folder.createFile(Date.now() + "-entities.ts");
    file.write(entities.map(e => e.toTypescript()).join(''));
}

async function toJson(selection: Selection) {

    const entities = SceneExplorer.exploreSelection(selection);

    const folder = await storage.localFileSystem.getFolder();
    const file = await folder.createFile(Date.now() + "-entities.json");
    file.write(entities.map(e => JSON.stringify(e.toJSON())).join(''));
}


(module).exports = {
    commands: {
        createRectangle: toTypescript,
        createEllipse: toJson
    }
};