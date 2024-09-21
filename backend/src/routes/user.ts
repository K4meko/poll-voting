import {user} from "@prisma/client";
import {Router, Request, Response} from "express";
const bcrypt = require("bcrypt");
const router = Router();
// const prisma = require("@prisma/client");
import prisma from "../../prisma/prismaClient";

const dotenv = require("dotenv");
import generateAccessToken from "../functions/generateToken";
import authenticateToken from "../functions/authenticateToken";
dotenv.config();
router.get(
  "/user/:id",
  authenticateToken,
  async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
      where: {id: req.params.id.toString()},
    });
    res.json(user);
  }
);

//delete one user
router.delete(
  "/delete/:id",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      await prisma.user.delete({
        where: {
          id: req.params.id,
        },
      });
      // res.send(`User ${user.username} has been deleted`);
    } catch (error) {
      res.status(500).json({error: "User not found or could not be deleted"});
    }
  }
);

//create user
router.post(
  "/signup/:username/:password/:email",
  (req: Request, res: Response) => {
    const {username, password, email} = req.params;
    const token = generateAccessToken(username);
    res.json(token);
    //res.send(`User ${username} has been created with password ${password}`);
    return;
  }
);
//test endpoint
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

export default router;
