const Tweet = require('../models/Tweet');

const postTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user._id, text });
    await tweet.save();
    res.status(201).json({ message: 'Tweet posted successfully', tweet });
  } catch (err) {
    res.status(400).json({ message: 'Error posting tweet', error: err.message });
  }
};

const getUserTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tweets);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching timeline', error: err.message });
  }
};

module.exports = { postTweet, getUserTimeline };
