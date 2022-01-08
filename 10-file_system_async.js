const {readFile,writeFile}=require('fs');
 console.log("start")
readFile('./content/first.txt','utf8',(err,result)=>{
     if(err){
         console.log(err)
         return err
     } 
     const var1=result
     readFile('./content/second.txt','utf8',(err,result)=>{
         if(err){
             console.log(err)
             return
         }
         const var2=result
         writeFile('./content/result_async.txt',`this are two files :${var1} ${var2}`,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log("done with the task")
     })
    })
     

 })
 console.log("starting other new task")