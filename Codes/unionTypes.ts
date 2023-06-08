let score: number | string = 33

score = 44
score = "mohith"

type User = {
    name:string 
    id: number
}

type Admin = {
    username: string
    id: number
}

let mohith: User | Admin = {name: "Mohtih", id:335}

mohith = {username: "gm",id: 335}

function getDbId(id: number | string){
    console.log(`Db Id is ${id}`)
}

// No errors
getDbId(4)
getDbId("3") 

// Exception Can't directly call toLowerCase()
function getDbId1(id: number | string){ 
    if(typeof id === "string"){
        id.toLowerCase()
    }
}

let ex: string | number[] // Accepts string or array of numbers

let ex2: string[] | number[] // Accepts array of strings or array of numbers

const ex3: (string | number) [] = ["1",2] // Accepts an array that contain numbers or strings

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "window"
