let greetings: string = "Hello World";

console.log(greetings);
// greetings = 6 // Error Not possible

// number
let userId: number = 6;

let answer = 5.4543;
answer.toFixed(2);

// boolean
let isCompleted: boolean = false;

// Avoid using any in Typescript
// let hero; -> It takes 'any' type here
let hero: string // Correct usage

function getHero(){
    return "Tony Stark"
}

hero = getHero();

export {} // To avoid TS error