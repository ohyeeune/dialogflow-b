const express = require('express')
const app = express();

app.use('/public', express.static('public'))
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(2090,()=>{
    console.log('connected...')
    //console.log(__dirname)
})