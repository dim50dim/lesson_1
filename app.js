
const fs = require('fs');
const path = require('path');
const util = require('util');




///////////  JSON file
const human = {
    name: 'mark',
    age: 22,
    department: ' history',
    gender: 'male',

}

//////////// HERE -- WE WRITE FILES BY CREATING  JSON FORMAT
fs.writeFileSync('girls/mark.txt',JSON.stringify(human), err=>{
    if(err) console.log('Error')
} );
/////////////////////////////////////////////////////////////////////
const boysFolder = path.join(__dirname,'boys')
const girlsFolder = path.join(__dirname, 'girls')
console.log(boysFolder)
console.log(girlsFolder)

const readFilePr = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
const renameF = util.promisify(fs.rename);
/////////////////////////////////////////////////////////////Function
  async function takeTheRigth  (oldPath, newPath,item) {
    try {
        let data = await readDir(oldPath);
        data.forEach(async elem => {
            let current = path.join(oldPath, elem)
            let other = path.join(newPath, elem);

            const allian = JSON.parse(await readFilePr(current));

            if (allian.gender.includes('female') ) {
                renameF(current, other);
            }
        })
    }
    catch(err)
        {
            console.log('ERROR');
        }

}
takeTheRigth(boysFolder,girlsFolder,'female');
takeTheRigth(girlsFolder,boysFolder,'male');
