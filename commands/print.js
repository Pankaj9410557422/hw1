let fs = require('fs');

function print(filePath){
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', function fun(err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
        return true;
    } else {
        return false;
    }
}
module.exports = {
    printFn:print
}