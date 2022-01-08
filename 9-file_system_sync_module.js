const {readFileSync,writeFileSync}=require('fs');
const { setFlagsFromString } = require('v8');
const file1 = readFileSync('./content/first.txt','utf8')
const file2 = readFileSync('./content/second.txt','utf8')
console.log(file1)//first.txt
console.log(file2)//second.txt
writeFileSync('./content/result_sync.txt',`the result of two files ${file1} ${file2}`,{flag:'a'})
console.log("starting new task");
console.log("ending new task")