const dbconnection = require('./dbconnection')


const updateItem =async () => {

    let db =await dbconnection();
    let result =await db.updateOne(
        {
            ItemName: "Samsung S20 Ultra",
            Price: 2380
        },
        {
            $set:{Brand: "iPhone"}
        }
    )
    if (result.modifiedCount>=1) {
        console.log('Update Sucessfully');
    }

}
updateItem();