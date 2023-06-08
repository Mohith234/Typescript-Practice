interface User {
    readonly dbId: number
    email : string,
    userId: number,
    googleId?: string //optional
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

// reopening of interface
interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "Ta" | "learner"
}

// USER
const mohith: User = { dbId: 22, email:"mohith@g.com", userId: 2323, 
githubToken: "1adsfasdn",
startTrail:() => {
    return "trail started"
},
getCoupon:(name: "discount10", off: 10) => {
    return 10
}}


// ADMIN
const mohith1: Admin = { dbId: 23, email:"mohith@gd.com", userId: 2324, 
role: "admin",
githubToken: "sdfdsa2",
startTrail:() => {
    return "trail started"
},
getCoupon:(name: "discount10", off: 10) => {
    return 10
}}

mohith.email = "mohith.com"

