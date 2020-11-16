# `hello-express` (Express+EJS Instructions)

## Express
1. Create a repo and `clone` to local machine.
```bash
git clone https://github.com/edgerees/hello-express.git
```
2. Type `npm i express` in terminal to install express
```bash
npm i express
```
3. Create a app.js
```bash
touch app.js
```
4. Add code to `app.js` to import the express module and also create an express application
```js
const express = require('express');
const app = express();
```
5. Insert code to `app.js` to create a home route. 
```js
app.get('/', function(req, res) {
    res.send('Hello, World!');
```
6. Now tell the application to listen to the specified port. Type in `app.js`..
```js
app.listen(8000);
```
7. Type `nodemon index.js` in terminal to run program in server.

8. Open your internet browser and type `localhost:8000` in url bar to view your application. 


## EJS:
1. Open terminal and type the following in file location to install ejs
```bash
npm install ejs
```
2. Open `app.js` and enter in the following before routes.
```js
app.set('view engine', 'ejs');
```
3. Place the .html files in a folder you made named `views` and rename the file type to `.ejs` instead of `.html`

4. Change route to:
```js
app.get('/(filename)', function(req, res) {
  res.render('(filename)', object);
});
```
5. The render function can take in an object as a parameter and access the values stored in it as variables inside the ejs template
6. The correct syntax for emedding javascript code into the ejs files is written as...
```js
<%= (embedded js goes here) %>
```