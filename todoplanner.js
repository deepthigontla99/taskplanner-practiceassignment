task=process.argv[2]
const addTask = require('./addTask')
const deleteTask = require('./deletetask')
const showTask = require('./showtask')
if(task==="add")
{
const txt = process.argv[3];
addTask(txt,
    (error)=>{
    console.log("entered");
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("added task successfully");
    }
});
}
else if(task==="delete")
{
    const txt = process.argv[3];
    deleteTask(txt,(error)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            console.log("deleted task successfully");
        }
    });
    
}
else if(task==="showtask")
{
    showTask();
}