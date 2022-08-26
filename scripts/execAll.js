import fs, { readdirSync } from 'fs'
import async from 'async';
import {exec} from 'child_process'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
const funcs = getDirectories('problems').map(function(folder, index) {
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
    resultsArr[result[0].split('.')[0]] = `## ${result[0]}\n Answer: ${result[1]} taking ${result[2]}`
  })
  const writeData = timingString + resultsArr.join('\n\n');
  fs.writeFileSync("README.md", writeData);
}
async.parallel(funcs, getResults);