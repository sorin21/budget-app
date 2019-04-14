const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const distPath = path.join(__dirname, '..', 'dist');
// run at port 5000 locally 
// process.env.PORT this is when we run at Heroku
const port = process.env.PORT || '5000';
app.set('port', port);

app.use(express.static(distPath));

// to avoid the error when we referesh the page and we get: Cannot GET /create
// use * to match all unmached routes
app.get('*', (req, res) => {
  // send the index.html back to dist folder
  res.sendFile(path.join(distPath, 'index.html'))
})

// /** Create HTTP server. */
const server = http.createServer(app);
// /** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`))