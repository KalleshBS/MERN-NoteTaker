const conn = require("../../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid request body" });
        }
        const { email, password } = req.body;
        // console.log(content || "NA",title);
        if (!email) {
            //   console.log(!fullname);
            throw new Error("Please provide Email!");
        } else if (!password) {
            //   console.log(!fullname);
            throw new Error("Please provide Password!");
        } else {
            conn.query(
                `select * from users where email = ?`,
                [email],
                async (e, result) => {
                    // console.log(res);
                    if (e) {
                        res.json({
                            message: "Invalid Email or password ",
                            desc: e + "",
                            error: true,
                            success: false,
                        });
                    }
                    if (result.length > 0) {
                        console.log(result[0]);

                        const pwd1 = result[0].password;
                        const verify = await bcrypt.compare(password, pwd1);

                        console.log(verify);

                        if (verify) {

                            const tokendata = {
                                user_id: result[0].id,
                                email: result[0].email
                            }

                            const token = await jwt.sign(tokendata, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

                            const tokenOptions = { httpOnly: true, secure: true }

                            res.cookie("token", token, tokenOptions).status(201).json({
                                data: token,
                                message: "Login successfull",
                                error: false,
                                success: true,
                            });
                        } else {
                            res.json({
                                message: "Invalid Email or password ",
                                error: true,
                                success: false,
                            });
                        }
                    } else {
                        res.json({
                            message: "Invalid Email or password ",
                            error: true,
                            success: false,
                        });
                    }
                }
            );
        }
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while login",
            desc: error + "",
            error: true,
            success: false,
        });
    }
};
