// this is the node internal module fs - filesystem
import fs from 'fs';

// reading the content of a file
const fileData = fs.readFileSync('./data.json')

// console.log(fileData) 
// we need to change it to a javascript object (array)
const jsonData = JSON.parse(fileData)
console.log(jsonData)

// we change the array
jsonData[0].name = "John Lennon"
console.log(jsonData)

// we write it back to the file 
fs.writeFileSync('./data.json', JSON.stringify(jsonData))