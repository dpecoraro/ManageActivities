export interface ICar {
    Id: number;
    model: string;
    topSpeed?: number;
}

const carOne: ICar = {
    Id: 1,
    model: 'Mercedes',
    topSpeed: 100
}

const carTwo: ICar = {
    Id: 2,
    model: 'BMW',
    topSpeed: 210
}

export const cars =  [carOne, carTwo];