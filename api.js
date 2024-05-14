
const express = require('express');
const dbConnection = require('./dbconnection');
const app = express();
app.use(express.json());


app.get('/',async (req, resp) => {
    let data =await dbConnection();
    data = await data.find().toArray();

    resp.send(data)
})

app.post('/',async(req, res) =>{
    let data = await dbConnection();
    let result =await data.insertOne(req.body);

    if (result.acknowledged) {
        res.send('Item Inserted Sucessfully')
    }
})

app.put('/:ItemName', async(req, resp) =>{
    let data = await dbConnection();
    let result = await data.updateOne(
        {
            ItemName : req.params.ItemName
        },
        {
            $set: req.body
        })

        if (result.modifiedCount>=1) {
            resp.send('Update Sucessfully')
        }
        else{
            resp.send('No Data Update')
        }
})

app.delete('/:itemName',async(req, res)=>{
    let data = await dbConnection();
    let result = await data.deleteOne({
        ItemName:req.params.itemName
    })
    if (result.deletedCount>=1) {
        res.send('Delete Sucessfully')
    }
    else{
        res.send('No Data Delete')
    }
    
})

app.listen(5000);