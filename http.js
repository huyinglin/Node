const http = require('node:http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // console.log('res: ', res);
  console.log('req: ', req.query);

  const { url } = req;

  req.query = querystring.parse(url.split('?')[1]);

  res.end(JSON.stringify(req.query));
});

server.listen(8000, () => {
  console.log('port on: 8000');
});
