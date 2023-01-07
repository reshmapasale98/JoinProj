const connection=require('../connection/db.connection');

module.exports={
    getAllusers:(req,res)=>{
        connection.query("SELECT * FROM tbl_users",(err,rows,result)=>{
            if(!err){
                res.send(rows);
            }else{
                res.send(err);
            }
        })
    },
    getJoinusers:(req,res)=>{
        connection.query("SELECT user.id as userid,user.name as user_name,user.email as user_email,user.mobile_no as user_mbile,branch.name asbranch_name from tbl_users as user INNER JOIN tbl_branches as branch ON user.branch_id=branch.id",(err,rows,result)=>{
            if(!err){
                res.send(rows);
            }else{
                res.send(err);
            }
        })
    },
    LeftJoinusers:(req,res)=>{
        connection.query("SELECT user.id as userid,user.name as user_name,user.email as user_email,user.mobile_no as user_mbile,branch.name asbranch_name from tbl_users as user LEFT JOIN tbl_branches as branch ON user.branch_id=branch.id",(err,rows,result)=>{
            if(!err){
                res.send(rows);
            }else{
                res.send(err);
            }
        })
    },
    RightJoinusers:(req,res)=>{
        connection.query("SELECT user.id as userid,user.name as user_name,user.email as user_email,user.mobile_no as user_mbile,branch.name asbranch_name from tbl_users as user RIGHT JOIN tbl_branches as branch ON user.branch_id=branch.id",(err,rows,result)=>{
            if(!err){
                res.send(rows);
            }else{
                res.send(err);
            }
        })
    }
}