import { SceneNode } from '@adobexd/typings/types/scenegraph';

export class NodeClassifier {

    static isEntity(node: SceneNode): boolean {
        return node.name.toLowerCase().includes('entity');
    }
    
    static isInput(node: SceneNode): boolean {
        return node.name.toLowerCase().includes('input');
    }
}