type User = {
    name: string;
    email: string;
    isActive: boolean
}

type Mystring = string;

function createUser(user: User): User{
    return {name:"",email:"",isActive:true}
}

createUser({name:"",email:"",isActive:true})


type User1 = {
    readonly _id: string; // read only 
    name: string;
    email: string;
    isActive: boolean
}

// If _id is an array it can perform Push and Pop operations

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// combining types
type cardDetails = cardNumber & cardDate & {
    cvvv: number
}

export {}