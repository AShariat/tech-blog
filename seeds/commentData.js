const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "I’m so glad we have brown cows, otherwise there wouldn’t be any chocolate milk.",
    user_id: "1",
    post_id: "2",
  },
  {
    comment_text:
      "9 out of 10 voices in my head tell me I’m crazy. The tenth is just humming.",
    user_id: "1",
    post_id: "3",
  },
  {
    comment_text: "After Tuesday, even the calendar says WTF.",
    user_id: "1",
    post_id: "5",
  },
  {
    comment_text:
      "You should always knock before opening a fridge, just in case there’s a salad dressing inside.",
    user_id: "2",
    post_id: "1",
  },
  {
    comment_text:
      "A successful man is one who earns more than his wife can spend. A successful woman is one who knows where to look for such a man.",
    user_id: "2",
    post_id: "6",
  },
  {
    comment_text:
      "A pessimist is someone who has spent too much time listening to optimists.",
    user_id: "3",
    post_id: "1",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
