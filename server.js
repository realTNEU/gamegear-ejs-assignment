import express from 'express';
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express();
const port=5000;
app.use(express.static('/public'))
app.use(express.static('node_modules'))
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))
app.get('/',(req,res)=>{
    res.render('index')
})

app.use(express.static(path.join(__dirname,'/public')));

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/build',(req,res)=>{
    res.render('build')
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})