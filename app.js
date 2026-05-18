const http = require("http");

const server = http.createServer((req, res)) => {

if (req.url === "/") {
  res.end("CI/CD Final Lab Working 🚀");
  } else if (req.url === "/health") {
    res.end("Application Healthy ✅");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
