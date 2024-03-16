import { createPolyanet, createSoloon, createCometh } from "../controllers/MegaverseApi";

export class MapService {

    public static processMap(goalMap: Array<Array<string>>) {
        goalMap.forEach((row: [], indexRow: number) => {
            row.forEach((column: string, indexColumn: number) => this.processAstralObject(column, indexRow, indexColumn));
        });
    }

    public static processAstralObject(object: string, row: number, column: number) {
        var astralObject = object.split("_", 2);
        if (astralObject[0] == "POLIANET") {
            createPolyanet(row, column);
        } else if (astralObject[1] == "SOLOON") {
            createSoloon(row, column, astralObject[0].toLowerCase());
        } else if (astralObject[1] == "COMETH") {
            createCometh(row, column, astralObject[0].toLowerCase());
        }
    }
}

export default MapService;