const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile("promises.txt", "Hello Guys!");
        console.log("File created and written successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

writeFile();

//read file
async function readFile() {
    try {
        const data = await fs.readFile("promises.txt", "utf8");
        console.log("File contents:", data);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

readFile();

//append file
async function appendFile() {
    try {
        await fs.appendFile("promises.txt", "\nSemester : 3");
        console.log("Text updated successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

appendFile();

//rename file
async function renameFile() {
    try {
        await fs.rename("promises_renamed.txt", "renamed.txt");
        console.log("File renamed successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

renameFile();

//delete file
async function deleteFile() {
    try {
        await fs.unlink("delsample.txt");
        console.log("File deleted successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

deleteFile();