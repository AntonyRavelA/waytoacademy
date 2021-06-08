import config from './dbconfig.js';
import sql from 'mysql';

function getdata(req,res){
    try {
        let conn = sql.createConnection(config);
        console.log("Sql is connected");
        conn.query("SELECT ID,ClassName FROM class ",function(err,result){
            if(err) throw err;
            else{
                res.json(result);
            }
        })
        conn.end();
    } 
    catch(err){
        console.log(err);
    }
}

// // Simple Query Getter 
// function getdata_withdata(){
//     try {
//         let conn = sql.createConnection(config);
//         console.log("Yeah it is connected");
//         conn.query("SELECT ID FROM Details WHERE ClassType = 'yoga'",function(err,rows){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(rows);
//                 console.log("!!!");
//                 conn.end();
//                 return rows;
                
               
//             }
//         });
//         console.log("JSON FILES",file);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

export default {
    getdata : getdata,
    // getdata_withdata : getdata_withdata,
    // temp : temp,
};