import fs, { readdirSync } from 'fs'
import async from 'async';
import {exec} from 'child_process'
// import path from 'path'; 

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  const funcs = getDirectories('problems').map(function(folder, index) {
    // try {
    //   const filePath = process.cwd()+ `/problems/${folder.split(' ').join('\\ ')}/app.js`;
    //   const data = fs.readFileSync(filePath, 'utf8');
    //   console.log(data);
    // } catch (err) {
    //   console.error(err);
    // }
    return exec.bind(null, `echo ${folder} && cd problems/${folder.split(' ').join('\\ ')} && node app.js`) // execute node command
});
function getResults(err, data) {
  let timingString = '# My take on Project Eurler\n\n';
  if (err) {
    return console.log(err)
  }
  const resultsArr = [];
  data.map(function(lines, index){
    const result = lines.join('').split('\n');
    resultsArr[result[0].split('.')[0]] = `<details><summary>${result[0]}</summary>\n\n### Answer:\n${result[1]}\n### Time:\n${result[2]}</details>`
  })
  const writeData = timingString + resultsArr.join('\n\n');
  fs.writeFileSync("README.md", writeData);
}
async.parallel(funcs, getResults);