const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "examples.txt");

fs.writeFileSync(filePath, "Exp 2 in fsd");
console.log("File is created successfully");

const data = fs.readFileSync(filePath, "utf8");
console.log("File is read successfully");
console.log(data);

fs.appendFileSync(filePath, "\nThis is appended text");
console.log("File is appended successfully");

fs.unlinkSync(filePath);
console.log("File is deleted successfully");

const folderPath = path.join(__dirname, "MyFolder");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Folder is created successfully");
} else {
    console.log("Folder already exists");
}