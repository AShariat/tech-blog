const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
// const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: ["id", "post_text", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      user_id: req.session.user_id,
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
