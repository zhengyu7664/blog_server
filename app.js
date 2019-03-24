const Koa = require('koa') ;
const Router = require('koa-router') ;
const bodyParser = require('koa-bodyparser') ;

const session = require('koa-session') ;

const userRouter = require('./routers/user')

const koaStatic = require('koa-static') ;

// 引入配置
let {appPort , staticDir  } = require('./config') ;


const app = new Koa() ;
const router = new Router() ;



// 暴露文件夹里的文件
app.use(koaStatic(staticDir)) ;


// session 配置
let store = {
    storage:{},
    set(key,session) {
        this.set.storage[key] =session ;
    },
    get(key) {
        return this.storage[key] ;
    },
    destroy(key){
        delete this.storage[key];
    }
}

app.keys = ['@@@ zheng yu song blog @@@']

app.use(session({store},app))


router.get('/',ctx => {
    ctx.body = 'index'
})
.get('/login',ctx => {
    ctx.body = 'login';

})
.get('/signin',ctx =>{
    ctx.body = 'signin'
 })
app.use(bodyParser()) ;
app.use(userRouter.routes()) ;

app.listen(appPort,() =>{
    console.log(`正在监听${appPort}端口`)
}) ;


