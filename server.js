// const express = require('express');
const app = express();
const port=5000;
// const ejs = require('ejs')
import express from 'express';
import ejs from 'ejs'
app.use(express.static('/public'))
app.use(express.static('node_modules'))
// const path = require('path');
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

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