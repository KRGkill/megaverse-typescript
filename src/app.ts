
import { getGoal } from "./controllers/MegaverseApi";
import mapService from "./services/mapService";


async function buildMap() {
    const goalMap = await getGoal();
    mapService.processMap(goalMap);
}


buildMap();