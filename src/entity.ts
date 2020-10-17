export class Entity {
    constructor(public name: string, public fields: string[]) { }

    toTypescript(): string {
        return `
        class ${this.name} {
            ${this.fields.map(f => f + ':string;').join('\n')}
        }
        `;
    }

    toJSON(): JsonEntity {
        let json: JsonEntity = {
            name: this.name,
            fields: this.fields.map((name: string) => ({ name, type: 'string' }))
        };

        return json;
    }
}

interface JsonEntity {
    name: string,
    fields: JsonField[];
}

interface JsonField {
    name: string;
    type: string;
}