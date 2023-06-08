const use1: (string | number)[] = ['gm',1]
const user2: (string | number)[] = [1,'gm']
// no restriction for structure 

// Tuples - Used for an ordered data
let tpl: [string,number,boolean]
tpl = ["gm",147,true]

type User = [number, string]
const newUser: User = [123,"mohith@g.com"]

newUser[1] = "mo.com" // u can change
newUser.push(4) // no error
export{}