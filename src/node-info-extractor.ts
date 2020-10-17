import { SceneNode } from '@adobexd/typings/types/scenegraph';

export class NodeInfoExtractor {
    static getEntityName(node: SceneNode): string {
        return node.name.split('-')[1];
    }
    
    static getFieldName(node: SceneNode): string {
        return node.name.split('-')[1];
    }
}