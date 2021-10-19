// import modules
const express = require('express');
const cluster = require('cluster');
const os = require('os');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const routing = require('./controller/main');
const http = require('http').createServer(app);
require('./config/db')

// middle ware

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(compression());
app.use('/api/v1',routing);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// test point

app.get('/check',(req,res)=>{
    res.json({status:"success"})
})

// child_process

if(cluster.isMaster){
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork()
    }
    cluster.on('end',()=>{
        console.log('server recreating');
        cluster.fork();
    })
}
else app.listen(9000,()=>console.log('server stared with '+process.pid));
