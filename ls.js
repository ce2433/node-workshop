const fs = require('fs');

const func = () => {
    // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
        throw err;
        } else {
        process.stdout.write(files.join('\n'));
        console.log('\n')
        process.stdout.write('prompt > ');
        }
    });
}

module.exports = func
