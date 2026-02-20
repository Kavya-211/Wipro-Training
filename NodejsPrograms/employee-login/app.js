const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Employee Name: ", (employeeName) => {
  rl.question("Enter Password: ", (password) => {
    const STATIC_PASSWORD = "kavya123";
if (employeeName && password === STATIC_PASSWORD) {
      const logData = `
Employee Name : ${employeeName}
Login Time   : ${new Date().toLocaleString()}
Department   : IT (Static)
Company      : wipro (Static)
Status       : Login Successful------------------------------------------`;

      const logFilePath = path.join(__dirname, "logs", "employee-log.txt");

      fs.appendFileSync(logFilePath, logData);

      console.log("\n Login Successful");
      console.log(" Log file updated");

    } else {
      console.log("\n Login Failed - Invalid Credentials");
    }

    rl.close();
  });
});
