const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));



app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/blog', (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(initial_path, "LogIn.html"));
})





app.get('/admin', (req, res) => {
   
    if (req.url.includes("?role")) {
        if (req.query.role.toLocaleLowerCase() == 'admin')
            res.sendFile(path.join(initial_path, "admin.html"));
        else
            res.sendFile(path.join(initial_path, "index.html"));
    } 
    else
    res.sendFile(path.join(initial_path, "LogIn.html"));

})

app.get('*', (req, res) => {
	res.statusCode = 404;
  			res.end(' Sorry, page not found');
})




app.listen("4000", () => {
    console.log('Server running at http://127.0.0.1:4000');
})