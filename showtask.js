const fs=require("fs");
const showtask=()=>
{
    fs.readFile("data2.txt","utf8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(data.toString().split("."));
        }
    });
    
}
module.exports=showtask