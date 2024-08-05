const express = require('express');
const { postTweet, getUserTimeline } = require('../controllers/tweetController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, postTweet);
router.get('/:userId/timeline', authMiddleware, getUserTimeline);

module.exports = router;
