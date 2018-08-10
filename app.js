
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

//log request url
app.use(async (ctx, next)=> {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});
//add request body parser
app.use(bodyparser());
//add router middleware
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
