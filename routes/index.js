import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '歡迎光臨' });
});

// module.exports = router;
export default router;
