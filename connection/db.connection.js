const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testing'
});
connection.connect((error)=>{
    if(error){
        throw error;
    }
    else{
        console.log(' db is connected successfully');
    }
});
module.exports=connection;