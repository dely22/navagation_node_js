const http = require('http');
const route = require('url');
const fs = require('fs');
http.createServer((req, res) => {
    try {

        switch (req.url) {
            case '/':
            case '/home':
            case '/index':

                fs.readFile(__dirname + '/index.html', function (err, html) {
                    if (err) throw err;
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end()
                })

                break;
            case '/blog':
                fs.readFile('./blog.html', function (err, html) {
                    if (err) throw err;
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end()
                })
                break;
            case '/admin':
            case '/login':
            case '/LogIn':
                fs.readFile('./LogIn.html', function (err, html) {
                    if (err) throw err;
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end()
                })
                // }
                break;
            case '/admin?role=admin':
                fs.readFile('./Admin.html', function (err, html) {
                    if (err) throw err;
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end()
                })
                break;
            default:
                fs.readFile('./404.html', function (err, html) {
                    if (err) throw err;
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end()
                })
                break;
        }


    } catch (er) {
        console.log(er);
        res.statusCode = 500;
        res.end()
    }

}).listen(5000)

