"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeClassifier = void 0;
class NodeClassifier {
    static isEntity(node) {
        return node.name.toLowerCase().includes('entity');
    }
    static isInput(node) {
        return node.name.toLowerCase().includes('input');
    }
}
exports.NodeClassifier = NodeClassifier;
