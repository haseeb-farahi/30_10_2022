var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('StartupsDB');
    var myobj = [
        {
        title:"This  is the #First Title",
        body: "This is the First Boudy text",
        author: "Haseeb farahi"
    },
    {
        title:"This  is the #Seccond Title",
        body: "This is the Seccond Boudy text",
        author: "Haseeb farahi"
    },
    {
        title:"This  is the #Third Title",
        body: "This is the Third Boudy text",
        author: "Haseeb farahi"
    },

]
dbo.collection('Blog').insertMany(myobj,(err,res)=>{
    if(err)throw err
    console.log('Many Reccords Added in Collection')
    db.close
})
})