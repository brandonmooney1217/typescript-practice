"use strict";
/**
* Lecture 1-3 Practice
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCoordinate = exports.helper = exports.createName = exports.fetchData = exports.printFormat = exports.format = exports.combineString = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
const combineString = (s1, s2) => `${s1} ${s2}`;
exports.combineString = combineString;
const format = (name, value) => {
    return `${name} ${value}`;
};
exports.format = format;
const printFormat = (name, value) => console.log((0, exports.format)(name, value));
exports.printFormat = printFormat;
const fetchData = (url) => Promise.resolve(`Data from ${url}`);
exports.fetchData = fetchData;
const createName = (name) => {
    return `${name.first} ${name.last}`;
};
exports.createName = createName;
const helper = (numbers, mutate) => {
    return numbers.map(mutate);
};
exports.helper = helper;
function parseCoordinate(arg1, arg2) {
    let coord = {
        x: 0,
        y: 0
    };
    if (typeof arg1 === 'string') {
        arg1.split(",").forEach((str) => {
            const [key, value] = str.split(":");
            coord[key] = parseInt(value, 10);
        });
    }
    else if (typeof arg1 === 'object') {
        coord = Object.assign({}, arg1);
    }
    else {
        coord = {
            x: arg1,
            y: arg2
        };
    }
    return coord;
}
exports.parseCoordinate = parseCoordinate;
console.log(parseCoordinate("x:10,y:90"));
const houseToIDMap = {
    "Atreides": 1,
    "Harkonnen": 2,
    "Corrino": 3,
};
function findHouses(houses) {
    //function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
    //function findHouses(houses: House[]): HouseWithID[];
    //function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[] {
    // houses input is string
    if (typeof houses == "string") {
        const parsedHouses = JSON.parse(houses);
        parsedHouses.ma;
    }
    // houses input is array of houses
    else {
    }
    return [];
}
const houses = `[
    {
        "name": "Atreides"
    },
    {
        "name": "Harkonnen"
    },
    {
        "name": "Corrino"
    }
]`;
// console.log(
//     findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
// );
// console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
//console.log(JSON.parse(houses)[0].name);
