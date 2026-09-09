const fs = require('fs');

fs.writeFile('sample.txt', 'Welcome to fsd.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

fs.appendFile('sample.txt', '\nSemester : 3', (err) => {
    if (err) {
        console.error('Error updating to file:', err);
    } else {
        console.log('Text updated successfully!');
    }
});

//updated read
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

fs.unlink('Example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});