// to be able to use import statements in node: see type: module in
// package.json
import express from 'express';
// this is the old syntax - commonJS
// const express = require('express');
import persons from './data.json' assert { type: 'json' };
import cors from 'cors';

const app = express();

// this is to solve the cors browser problem
app.use(cors());

// this is called a route localhost:8000
app.get('/', (request, response) => {
	console.log(request.url)
	// console.log('this is the home route')
	response.json({user: 'sven', age: 50})
})

// this route is localhost:8000/about
app.get('/about', (req, res) => {
	res.json({route: 'about'})
})

app.get('/persons', (req, res) => {
	console.log(persons)
	res.json(persons)
})

app.get('/:user', (req, res) => {
	res.json(req.params)
})

// route with multiple parameters
app.get('/movies/:movieId/actors/:actorId', (req, res) => {
	res.json(req.params)
})

// starting the server on port 8000
app.listen(8000, () => {
	console.log('server listening on port 8000')
})