const { readFileSync, writeFileSync } = require('fs');
//Here the terms inside curly brackets in the first line are nothing but the functions extracted from the fs(file system ) module
//readFileSync reads the content of the file synchronously and returns the files content
//writeFileSync is a function that writes data to file snchronously
//require('fs'): Here it is used to import external modules 
const first = readFileSync('./content/subfolder/first.txt', 'utf8'); // Use forward slash or double backslash
//We are storing the content of the first text file into the variable first
const second = readFileSync('./content/subfolder/second.txt', 'utf8'); // Use forward slash or double backslash
//We are storing the content of second file into the variable second
writeFileSync('./content/subfolder/result-sync.txt',
    `Here is the result : ${first},${second}`, { flag: 'a' })
//Here flag is used with letter which means append the statements rather than overwriting it 