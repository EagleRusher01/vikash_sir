const path = require("path");

// Yahan sirf ek level upar jana hai
const serverPath = path.join(__dirname, "..", "server.js");

// Start server
require(serverPath);

console.log("⚡ Server started using api/start.js");
