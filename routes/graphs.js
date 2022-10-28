var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

let url = "https://ssd-api.jpl.nasa.gov/fireball.api";
let settings = {method: "GET", headers: {'Content-Type': 'application/json'}};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('graphs', { title: 'DLU'});
});

router.get('/request', async (req, res, next) => {
    let params = new URLSearchParams(req.query);
    params.append('sort', 'impact-e');
    const json = await fetch(url+"?req-loc=true&req-vel=true&"+params, settings)
    .then(res => res.json());
    const jsonData = JSON.stringify(json);
    console.log(json);
    res.json(jsonData);
});

module.exports = router;
