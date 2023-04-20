export class Design {
    constructor(heightNodes, widthNodes, valuesRows) {
        if(!valuesRows instanceof Array || valuesRows.length !== heightNodes) {
            throw new Error('valuesRows must be an array with the same length as heightNodes');
        }

        this.heightNodes = heightNodes;
        this.widthNodes = widthNodes;
        this.valuesRows = valuesRows;
    }
}

export const Colors = {
    white: 0,
    black: 1,
    red: 2,
    green: 3,
    blue: 4,
    yellow: 5,
    cyan: 6,
    magenta: 7,
}