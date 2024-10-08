const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST" ><input type="text" name="message" /></form></body>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const msg = parseBody.split("=")[1];
      fs.writeFile("message2.txt", msg, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Node App</title></head>");
    res.write("<body><h2>First Node app</h2></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
