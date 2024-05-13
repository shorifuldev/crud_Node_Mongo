const dbconnection = require('./dbconnection')

const insertItems = async ()=>{
    const db = await dbconnection();
    const result = await db.insertOne(
        {
            "ItemName": "iPhone 16 Pro Max",
            "Category": "Phone",
            "Department": "Phone",
            "Price": 3100,
            "Brand": "iPhone"
        }
    );

    // const result2 = await db.insertMany(
    //     [
    //         {
    //             "ItemName": "Samsung S20 Ultra",
    //             "Category": "Phone",
    //             "Department": "Phone",
    //             "Price": 2390,
    //             "Brand": "Samsung"
    //         },
    //         {
    //             "ItemName": "Samsung S21 Ultra",
    //             "Category": "Phone",
    //             "Department": "Phone",
    //             "Price": 2890,
    //             "Brand": "Samsung"
    //         }
    //     ]
    // )
    
    if(result2.acknowledged){
        console.log("Items insert Sucessfully");
    }


}

insertItems();