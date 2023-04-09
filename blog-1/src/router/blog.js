const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  const path = url.split('?')[0];

  if (method === "GRT" && path === '/api/blog/list') {
    return {
      msg: '这是获取博客列表的接口'
    };
  }
}

module.exports = handleBlogRouter;
