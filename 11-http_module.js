const http =require('http')
const server=http.createServer((req, res) => {
    if(req.url=='/'){
        res.end('Welcome to home page')
    }
    if(req.url=='/about'){
        res.end('this is our short history')
    }
    
        res.end(`<hl>oops wrong page</h1>
        <a href="/">return back</a>`)
    
})
server.listen(3000)