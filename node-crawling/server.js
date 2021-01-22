const express = require('express');

const app = express();
const port = 3000;


app.get('/shipping/:invc_no', async (req,res) => {
    try{

        res.send(req.params.invc_no);


    }catch(e){
        console.log(e)
    }    
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});