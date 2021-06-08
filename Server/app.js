import Express from 'express';
import conn from './dboperation.js';
import cors from 'cors';
import bodyparser from 'body-parser';
import con from './dbconfig.js';
import sql from 'mysql';

let app = Express();
let db = sql.createConnection(con);
let Type;
var List = [];
app.use(cors());
app.use(bodyparser.urlencoded({extended : true})); 
app.use(Express.json());



app.get("/testing",conn.getdata);
//Class Api
app.post("/classes",(req,res)=>{
    Type = req.body.producttype;
    console.log(Type);
    const Query = `SELECT ID,ImageSrc,Caption FROM class WHERE ClassType = '${Type}'`;
    console.log(Query);
    db.query(Query,(err,result)=>{
        console.log(result);
        res.send(result);
    })
});

// Home Api
app.get("/Home",(req,res)=>{
    const Query = "SELECT  * FROM Home";
    db.query(Query,(err,result)=>{
        res.json(result);
    })
});

// Display Api
app.post("/Display",(req,res)=>{
    const Id = req.body.id;
    console.log(Id);
    const Query = `SELECT * FROM class WHERE ID = '${Id}'`;
    db.query(Query,(err,result)=>{
        if(err)throw err;
        else{
            res.send(result);
        }
    })
});

app.listen(5000,()=>{console.log("Listenin");})