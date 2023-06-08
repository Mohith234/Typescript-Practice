let User = {
    name: "mohith",
    email: "mohith@g.com",
    isActive: true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name:"Mohith", isPaid: false})
export {}

// Object returning Object
function createCourse():{name: string, price:Number}{
    return {name:"react", price: 399}
}

// Weird Behaviour
function createUser1({name: string, isPaid:boolean}){}

let newUser = {name:"Mohith", isPaid:false, email:"mohith@g.com"}

createUser(newUser) // No error

export{}