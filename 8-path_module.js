console.log(__dirname)
const path= require('path')
console.log(path.sep)
 const filepath=path.join('/content','subfolder','file.txt')
 console.log(filepath)

const base=path.basename(filepath)
console.log(base)
 const res= path.resolve(__dirname,'content','subfolder','file.txt')
 console.log(res)