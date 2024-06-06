const conn = require("../../config/db");
const bcrypt = require("bcryptjs");

async function signUp(req, res) {
  try {
    // let z = {
    //   ...req.body,
    // };
    // console.log(z);
    // console.log(Object.keys(req.body).length === 0);
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid request body" });
    }
    const { fullname, email, mobile } = req.body;
    const password1 = req.body.password;
    if (!fullname) {
      //   console.log(!fullname);
      throw new Error("Please provide Name!");
    } else if (!email) {
      //   console.log(!email);
      throw new Error("Please provide email!");
    } else if (!mobile) {
      //   console.log(!mobile);
      throw new Error("Please provide mobile number!");
    } else if (!password1) {
      //   console.log(!password);
      throw new Error("Please provide password!");
    } else if (email) {
      //   console.log(email);
      conn.query(
        `select * from users where email = ?`,
        [email],
        (e, result) => {
          // console.log(res);
          if (e) {
            throw new Error(e);
          }
          if (result.length > 0) {
            return res
              .status(409)
              .json({ success: false, message: "User already exists" });
          } else {
            // const password1 = password;
            const salt = bcrypt.genSaltSync(10);
            const password = bcrypt.hashSync(password1, salt);
            if (!password) {
              throw new Error(" p1e101 Error while signUp");
            }
            const payload = {
              ...req.body,
              password: password,
            };

            conn.query(
              "Insert into users set ?",
              { fullname, email, mobile, password },
              (e, result1) => {
                if (e) {
                  throw new Error(e);
                } else {
                  //   console.log("inserted ", result1.affectedRows, " row");
                  res.status(201).json({
                    data: payload,
                    success: true,
                    error: false,
                    message: "User Registered Succesfully.",
                  });
                }
              }
            );
          }
        }
      );
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error while SignUp",
      desc: e + "",
      error: true,
      success: false,
    });
  }
}

module.exports = signUp;

/*

async function signUp(req, res) {
  try {
    // Check if req.body is defined
    if (!req.body) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    const { name, email, password } = req.body;
    // console.log(req.body);
    if (!name) {
      throw new Error("Please provide Name!");
    } else if (!email) {
      throw new Error("Please provide email!");
    } else if (!password) {
      throw new Error("Please provide password!");
    } else if (email) {
      // Check if the user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      if (!hash) {
        throw new Error(" p1e101 Error while signUp");
      }
      const payload = {
        ...req.body,
        password: hash,
      };
      let result = new userModel(payload).save();

      res.status(201).json({
        data: result,
        success: true,
        error: false,
        message: "User SignUp Succesfully (❁´◡`❁) ╰(*°▽°*)╯",
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error while SignUp",
      desc: e + "",
      error: true,
      success: false,
    });
  }
}

*/
