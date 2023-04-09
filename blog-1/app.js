const handleBlogRouter = require('./src/router/blog');

const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json');

  const blogData = handleBlogRouter(req, res);

  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }


  res.writeHead(404, { 'content-type': 'text/plain' });
  res.write('404 Not Fond\n');
  res.end();

};

module.exports = serverHandle;
