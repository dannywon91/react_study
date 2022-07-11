const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = new Router();



// 라우터 설정
router.get('/', (ctx) => {
    ctx.body = '홈';
});

router.get('/about', (ctx) => {
    ctx.body = '소개';
});

router.get('/about/:name?', (ctx) => {
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개` : '소개'
});

router.get('/posts', (ctx) => {
    const {id} = ctx.query;
    ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.'
});


//라우터 적용하기 전에 bodyParser를 적용해야 한다.
app.use(bodyParser());


// app 인스턴스에 라우터 적용
router.use('/api', api.routes()); // api 라우트 적용
app.use(router.routes()).use(router.allowedMethods());



app.listen(4000, () => {
    console.log('Listening to port 4000'); 
});