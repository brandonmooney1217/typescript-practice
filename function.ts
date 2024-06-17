/**
* Lecture 1-3 Practice
*/

function addNumbers(a: number, b: number): number {
    return a + b;
}

export interface Name {
    first: string,
    last: string,
}

export default addNumbers;
export const combineString = (s1: string, s2: string): string => `${s1} ${s2}`;
export const format = (name: string, value: string | number): string => {
    return `${name} ${value}`;
}

export const printFormat = (name: string, value: string | number): void => 
    console.log(format(name, value));

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

export const createName = (name: Name): string => {
    return `${name.first} ${name.last}`
};

export type MutationFunction = (v: number) => number;

export const helper = (numbers: number[], mutate: MutationFunction): number[] => {
    return numbers.map(mutate);
}

/**
  * Lecture 4 Practice
*/

interface Coordinate {
    x: number,
    y: number
}
export function parseCoordinate(coordinate: string): Coordinate;
export function parseCoordinate(coordinate: Coordinate): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord = {
        x: 0,
        y:0
    };

    if (typeof arg1 === 'string') {
        (arg1 as string).split(",").forEach((str) => {
            const [key, value] = str.split(":");
            coord[key as "x" | "y"] = parseInt(value, 10);
        });
    } else if (typeof arg1 === 'object') {
        coord = {
            ... (arg1 as Coordinate)
        };
    } else {
        coord = {
            x: arg1 as number, 
            y: arg2 as number
        };
    }

    return coord;
}

/**
  * Challenge 1 Practice
*/

interface House {
    name: string
}
    
interface HouseWithID {
    name: string,
    id: number
}

const houseToIDMap: Record<string, number> = {
    "Atreides": 1,
    "Harkonnen": 2,
    "Corrino": 3,
}

    
function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];

function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[]{

    let housesWithID: HouseWithID[];

    // houses input is string
    if (typeof houses == "string") {

        let parsedHouses: House[] = JSON.parse(houses);
        housesWithID = parsedHouses.filter(filter || (() => true)).map((house: House) => ({
            name: house.name,
            id: houseToIDMap[house.name]
        }));
    } 
    // houses input is array of houses
    else {
        housesWithID = houses.filter(filter || (() => true)).map((house: House) => ({
            name: house.name,
            id: houseToIDMap[house.name]
        }));
    }

    return housesWithID;

}

const housesJson: string = `[
    {
        "name": "Atreides"
    },
    {
        "name": "Harkonnen"
    },
    {
        "name": "Corrino"
    },
    {
        "name": "Atreides"
    }
]`;

const housesArray: House[] = [
{
    name: "Atreides"
},
{
    name: "Atreides"
}

]

console.log(findHouses(housesJson, ({ name }) => name === "Harkonnen"));

console.log(findHouses(housesArray, ({ name }) => name === "Atreides"));


/**
  * Lecture 6: optionals
*/

// how to deal with optional paramaters im a function
function printUser(name: string, userName: string, email?: string) {
    console.log(`${name}, ${userName}, ${email ? `${email}`: ""}`);
}
interface User  {
    name: string,
    info? : {
        email?: string;
    }
}
function getEmail(user: User): string {
    return user?.info?.email ?? "";
}

/**
  * Lecture 7: tuples
  * uses the type keyword
*/

type ThreeDCoordinate = [x: number, y: number, z: number];

function addThreeDCoordinates(c1: ThreeDCoordinate, c2: ThreeDCoordinate, c3: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0] + c3[0], 
        c1[1]+ c2[1] + c3[1], 
        c1[2] + c2[2] + c3[2]
    ]
}

/**
  * Lecture 8: generics
  * uses the type keyword
*/

function simpleState<T> (initial: T): [() => T, (v: T) => void] {
    let value: T = initial;

    return [
        () => value,
        (v: T) => {
            value = v;
        }
    ]
}

const [getter, setter] = simpleState<string | number>(10);

console.log(getter());
console.log(getter());

interface Rank<RankItem> {
    item: RankItem,
    rank: number
}

function ranker<RankItem> (items: RankItem[], rank: (v: RankItem) => number): RankItem[] {

    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a,b) => a.rank - b.rank);
    return ranks.map(rank => rank.item);
}

interface SuperHero {
    name: string,
    power: number
}

const superHeroes: SuperHero[] = [
    {
        name: "Superman",
        power: 10
    },
    {
        name: "Spiderman",
        power: 1
    },
    {
        name: "Batman",
        power: 100
    },
]

console.log(ranker(superHeroes, (superHero: SuperHero) => superHero.power))

/**
  * Challenge 2
*/

// foreach function
function myForEach<T> (array: T[], callbackFunc: (v: T) => void): void {
    array.reduce((accum, currValue) => {
        callbackFunc(currValue);
        return undefined;
    }, undefined)
}
myForEach([1,2,3], (v) => console.log(`Number: ${v}`))

// filter function
function myFilter<T> (array: T[], callbackFunc: (v: T) => boolean): T[] {
    return array.reduce((a: T[], v: T) => {
        if (callbackFunc(v)) {
            a.push(v);
        }
        return a;
    }, []);
}
console.log(myFilter([1,2,3,4,5], (v) => v % 2 == 0))

// map function
function myMap<T, R> (array: T[], callbackFunc: (v: T) => R): R[] {
    return array.reduce((a: R[], v: T) => {
        a.push(callbackFunc(v));
        return a;
    }, [])
}

console.log(myMap([1,2,3,4], (v) => v * 100))







