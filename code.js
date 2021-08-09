const readline = require('readline')
console.log('hello, world')

const firstname = "Bryan"

let age = 31

console.log (firstname, age)

let iscool=true

console.log(iscool)

iscool=false

console.log(iscool)

let height

console.log(height)

let x =4
let y = 10
let z = 10 + 4
let sum = x + y

console.log (x, y, z, sum)

let str = "string"
let str2 = `string`
let str3 = `String`

console.log(str,str2,str3)

const lastname = `Beck`

const Bryan = firstname + lastname

console.log(Bryan)

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question ("Howdy, what's your name?", function(answer) {
    console.log('Hi ${answer}')

})

//