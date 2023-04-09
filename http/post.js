const http = require('node:http');

const server = http.createServer((req, res) => {

  /**
   * 和 get 方法不同的是，post 方法接收的是数据流。就像将一个水桶里的水倒到另一个水桶里一样，
   * 我们有个管子连接两个水桶，然后当一个水桶开始倒水的时候，另一个水桶会知道什么时候有水，什么时候结束。
   * 我们需要把“水”给拼接起来。
   */

  if (req.method === 'POST') {
    console.log('req content-type: ', req.headers['content-type']);
    console.log('req.headers: ', req.headers);

    let postData = '';

    req.on('data', (chunk) => {
      // 拼接数据
      postData += chunk.toString();
    });

    req.on('end', () => {
      res.end(postData);
    });

  }

});

server.listen(8000, () => {
  console.log('port on: 8000');
});
