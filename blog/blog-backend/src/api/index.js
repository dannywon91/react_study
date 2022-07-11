const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

// api.get('/test', (ctx) => {
//     ctx.body = '테스트 성공';
// });

api.use('/posts', posts.routes());


//라우터를 내보낸다.
module.exports = api;