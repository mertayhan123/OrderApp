import User  from "../models/Users.js";
import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

//register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json("User has been registered");
    } catch (error) {
        res.status(500).json(error);
    }
}
);

//! login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).send({ error: "User not found!" });
  
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!validPassword) {
        res.status(403).json("Invalid password!");
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });
export default router;