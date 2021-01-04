const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res, next) => {
  const search = req.query.search || '';


const newsList = News
.find({title: new RegExp(search.trim(), 'i')})
.sort({created: -1})


newsList.exec((err, data) => {
  res.render('aktualnosci', { title: 'Aktualnosci', data, search });
  
})
 
});



module.exports = router;
