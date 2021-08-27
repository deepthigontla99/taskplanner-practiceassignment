const fs=require("fs");
const deletetask = () => {
    const deleteIndex = process.argv[3];
    if (deleteIndex) {
        let data = [];
        const fileData = fs.readFileSync('data2.txt').toString();
        data = fileData.split('.');
        let filterData = data.filter(function (value) {
        return value !== '';
        });
        if (deleteIndex > filterData.length || deleteIndex <= 0) {
        console.log(
            'Error: todo #' + deleteIndex
                + ' does not exist. Nothing deleted.',
        );
        } else {
        filterData.splice(filterData.length - deleteIndex, 1);
        const newData = filterData.join('.');
        fs.writeFile('data2.txt',
            newData,
            function (err) {
            if (err) throw err;
            console.log('Deleted todo #' + deleteIndex);
            },
        );
        }
    } else {
        console.log(
    'Error: Missing NUMBER for deleting todo.');
    }
    };
    module.exports=deletetask