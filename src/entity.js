"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(name, fields) {
        this.name = name;
        this.fields = fields;
    }
    toTypescript() {
        return `
        class ${this.name} {
            ${this.fields.map(f => f + ':string;').join('\n')}
        }
        `;
    }
    toJSON() {
        let json = {
            name: this.name,
            fields: this.fields.map((name) => ({ name, type: 'string' }))
        };
        return json;
    }
}
exports.Entity = Entity;
