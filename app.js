
const fs = require('fs');
const path = require('path');
const util = require('util');



const filePath = path.join(__dirname, 'boys', 'anna.txt')
const  filePathNew= path.join(__dirname, 'girls','anna.txt')
const folderNewPath = path.join(__dirname,'girls')

const readPromise = util.promisify(fs.readFile);
///////////  JSON file
const man = {
    name: 'kate',
    age: 22,
    department: ' history',
    gender : 'female',
}
////////////// HERE -- I WRITE FILES BY CREATING  JSON FORMAT
// fs.writeFileSync('boys/kate.txt',JSON.stringify(man), err=>{
//     if(err) console.log('Error')
// } );
readPromise(filePath).then(data=>{
    console.log(data)
})
