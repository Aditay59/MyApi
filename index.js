const express = require('express');
const app = express();
const PORT = 6969;
const cors = require('cors');

const data = require('./Product.json');

app.use(cors());
app.use(express.json());

// app.get('/page',(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// })

app.get('/',(req,res)=>{
    res.status(200).json(data);
});

app.post('/:id',(req,res)=>{
    const {id} = req.params;
    //console.log(typeof(id));
    const response = data.find((item)=>{
        //console.log(typeof(id));
        return item.id===parseInt(id);
    })
    //console.log(response);
    res.status(200).json(response);
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);   
});
