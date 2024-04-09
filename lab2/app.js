const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scrapy'
});


db.connect((err) => {
    if (err) throw err;
    console.log('Підключено до бази даних');
});
app.get('/kpi', (req, res) => {
    
    const query = 'SELECT * FROM items';
    db.query(query, (err, results) => {
        if (err) throw err;
        
        res.json(results);
    });
});
app.post('/kpi', (req, res) => {
   
    const data = req.body;

<<<<<<< HEAD
    // Вставляємо дані в таблицю 'items'
    const query = 'INSERT INTO items (name,department, url) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.faculty, data.url], (err, result) => {
=======
   
    const query = 'INSERT INTO items (name, department, url) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.department, data.url], (err, result) => {
>>>>>>> 406dce56ee7854a30786288d54c38d18ebb1945a
        if (err) throw err;
        console.log(result);
        res.send('Дані успішно збережено.');
    });
});

app.listen(3003, () => {
    console.log('Сервер запущено на порту 3003');
});
