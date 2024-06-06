const express = require("express");
const router = express.Router();

// users
{
  // router.post("/user/signUp", require("../controllers/user/signUp"));
  router.post("/user/signup", require("../controllers/users/register"));
  router.post("/user/addnote", require("../controllers/Notes/note").addNote);
  router.post("/user/login", require("../controllers/auth/login").login);
}

module.exports = router;
