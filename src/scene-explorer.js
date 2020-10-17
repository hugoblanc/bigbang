"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneExplorer = void 0;
const entity_1 = require("./entity");
const node_classifier_1 = require("./node-classifier");
const node_info_extractor_1 = require("./node-info-extractor");
class SceneExplorer {
    static exploreSelection(selection) {
        const exploration = SceneExplorer.getDeepChildren(selection.items);
        return exploration;
    }
    static getDeepChildren(children) {
        let result = [];
        if (children.length === 0) {
            return result;
        }
        for (let node of children) {
            if (node.isContainer) {
                const smallChild = node.children.toArray();
                result = result.concat(...this.getDeepChildren(smallChild));
                if (node_classifier_1.NodeClassifier.isEntity(node)) {
                }
                const entityName = node_info_extractor_1.NodeInfoExtractor.getEntityName(node);
                const entity = new entity_1.Entity(entityName, result);
                result = [entity];
            }
            else {
                result.push(node_info_extractor_1.NodeInfoExtractor.getFieldName(node));
            }
        }
        return result;
    }
}
exports.SceneExplorer = SceneExplorer;
