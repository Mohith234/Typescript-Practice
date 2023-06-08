class User{
    email: string
    name: string
    city: string = ""
    constructor(email: string,name: string){
        this.email = email;
        this.name = name
    }
}

const mohith = new User("mohith@g.com","mohith")
mohith.city = "Hyderabad"