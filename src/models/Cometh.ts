
class Cometh extends AstralObject {
    direction: string;

    constructor(row: number, column: number, direction: string) {
        super(row, column);
        this.direction = direction;
    }
}
