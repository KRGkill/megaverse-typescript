import axios from "axios";
import { api, candidateId } from "../constant";

const headers = {
    "Content-Type": "application/json",
};

async function getGoal(): Promise<Array<Array<string>>> {
    return await axios
        .get(`${api}/map/${candidateId}/goal`)
        .then((response) => response.data.goal);
}

async function createPolyanet(row: number, column: number) {

    return setTimeout(
        () =>
            axios.post(`${api}/polyanets`, { row, column, candidateId }, { headers }),
        1000
    );
}

async function createSoloon(row: number, column: number, color: string) {
    return setTimeout(
        () =>
            axios.post(`${api}/soloons`, { row, column, color, candidateId }, { headers }),
        1000
    );
}

async function createCometh(row: number, column: number, direction: string) {
    return setTimeout(
        () =>
            axios.post(`${api}/comeths`, { row, column, direction, candidateId }, { headers }),
        1000
    );
}

export {
    getGoal,
    createPolyanet,
    createSoloon,
    createCometh
};