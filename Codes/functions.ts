// Defining variable types
function addTwo(num){
    return num + 2
}

function addThree(num: number){
    return num + 3
}

addTwo(5)
addTwo("Mohith") // Should throw error but won't
addThree(5) // addThree("Mohith") Will throw error

function getUpper(val: string){
    return val.toUpperCase()
}

// getUpper(5) Will throw error
getUpper("Mohith") 

// Passing Default values
let fun = (name : string, email:string, isPaid: boolean = false) => {}
fun("M","mohith@g.com")

// Defining return type
function f(num: number) : number{
    return num+1
}

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// Returning never type
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export{}