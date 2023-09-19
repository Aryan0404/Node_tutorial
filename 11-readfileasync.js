const { readFile, writeFile } = require('fs')
//Here we are first improting the functions from the fs module
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    //We are encoding the file content in utf8 and readfile function is called to read the content of the first.txt
    if (err) {
        console.log(err);
        return
        //if any error is faced then we return null 
    }
    //if no error then the content of first file is stored in const first
    const first = result;
    //After reading the first file we call the readfile function again to read the second file
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //if succesfully read with no error then we store it in const second
        const second = result
        //after reading both files we then decide to write the contents into a new file which consists of content of both first and second file

        writeFile(
            //three things are passed 
            //first is the directory of the new file
            //second is the content of the new file
            './content/subfolder/result-async.txt',
            `Here is the result : ${first},${second}`

            , (err, result) => {
                //this is for checking error
                if (err) {
                    console.log(err)
                    return;
                }
                //logging the console after succesfully run with no error
                console.log(result)
                readFile('./content/subfolder/result-async.txt', 'utf8', (err, result) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log(result);
                })
            })

    })
})
