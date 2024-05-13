
const dbConnection = require('./dbconnection')

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);

//     let collection = db.collection('items')
//     let resp = await collection.find({}).toArray();
//     console.log(resp);

// }

// getData();

/* 1st Way to Handle Promiss */

// dbConnection().then((resp) => {
//     let resData = resp.find().toArray();
//     resData.then((data) => {
//         console.log(data);
//     })
// })

/* 2nd Way to Handle Promiss */

const getItems = async () => {
    let data =await dbConnection()
    data = await data.find().toArray()

    console.log(data);
}
getItems();