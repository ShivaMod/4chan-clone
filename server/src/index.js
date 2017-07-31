import http from "http";
import app from "./app";

const port = normalizePort(process.env.PORT || "9000");
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port -> ${port}`);
});
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
