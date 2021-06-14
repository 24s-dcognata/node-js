const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./modules/templater');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const templateCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);

    if (reqUrl.pathname === '/' || reqUrl.pathname === '/overview') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        const cardsHtml = dataObj.map((value) => replaceTemplate(templateCard, value)).join('\n');
        const overviewHtml = templateOverview.replace('{% product_cards %}', cardsHtml);

        res.end(overviewHtml);
    } else if (reqUrl.pathname === '/product' && reqUrl.searchParams.get('id') !== undefined) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        const id = Number(reqUrl.searchParams.get('id'));
        const product = dataObj.find((value) => {
            return value.id === id;
        })
        const productHtml = replaceTemplate(templateProduct, product);

        res.end(productHtml);
    } else if (reqUrl.pathname === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {'Content-Type': 'text/hmtl'});
        res.end("On the page.");
    }
})

server.listen(8081, '127.0.0.1', () => {
    console.log('Le serveur ecoute sur le port 8081');
})