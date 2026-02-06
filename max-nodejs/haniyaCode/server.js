const fs = require("fs");
const requestHandlers = (req, res) => {
  const url = req.url;
  const method = req.method;
  let postdata;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><tile>POSt method</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='usrname' /><button type='submit'>Submitt</button</form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write(
      "<!DOCTYPE html><html><body><ul><li>Items</li><li>Items 2</li><li>Items 3</li><li>Items 4</li></ul</body></html>"
    );
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const name = parseBody.split("=")[1];
      fs.writeFile("create-user.txt", name, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        console.log(parseBody.split("=")[1]);
        return res.end();
      });
    });
  }
};
module.exports = requestHandlers;
