import { SceneNode } from '@adobexd/typings/types/scenegraph';

import { Entity } from './entity';
import { NodeClassifier } from './node-classifier';
import { NodeInfoExtractor } from './node-info-extractor';

export class SceneExplorer {


    static exploreSelection(selection: Selection): Entity[] {
        const exploration = SceneExplorer.getDeepChildren(selection.items);
        return exploration as Entity[];
    }

    static getDeepChildren(children: SceneNode[]): (Entity | string)[] {
        let result: (Entity | string)[] = [];
        if (children.length === 0) {
            return result;
        }
    
    
    
        for (let node of children) {
            if (node.isContainer) {
                const smallChild = (node.children as any).toArray();
                result = result.concat(...this.getDeepChildren(smallChild));
                if(NodeClassifier.isEntity(node)){
                }
                const entityName = NodeInfoExtractor.getEntityName(node);
                const entity = new Entity(entityName, result as string[]);
                result = [entity];
            } else {
                result.push(NodeInfoExtractor.getFieldName(node));
            }
        }
        return result;
    
    }
}