const os1 = require('os');
const var1= os1.userInfo();
console.log(var1);
console.log(`the system uptime is ${os1.uptime()} seconds`)
 const currentOS ={
     name:os1.type(),
     version:os1.version(),
     totmemory:os1.totalmem(),
     freememory:os1.freemem(),
 }
 console.log(currentOS);