"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeInfoExtractor = void 0;
class NodeInfoExtractor {
    static getEntityName(node) {
        return node.name.split('-')[1];
    }
    static getFieldName(node) {
        return node.name.split('-')[1];
    }
}
exports.NodeInfoExtractor = NodeInfoExtractor;
