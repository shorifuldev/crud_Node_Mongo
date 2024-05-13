const dbConnection = require("./dbconnection");

const deleteItem = async () => {
  let db = await dbConnection();
  let result = await db.deleteOne({
    ItemName: "Samsung S21 Ultra",
    Price: 2890,
  });

  if (result.deletedCount >= 1) {
    console.log('Delete Sucessfully');
  }
};

deleteItem();
