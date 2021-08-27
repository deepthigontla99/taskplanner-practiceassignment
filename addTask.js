const fs=require("fs")
txt=process.argv[3];
const addTask=(txt)=>{fs.appendFile("data2.txt",txt,(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("completed");
    }
});
fs.readFile("data2.txt",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        data.toString().split("/n");
    }
});
}
module.exports=addTask