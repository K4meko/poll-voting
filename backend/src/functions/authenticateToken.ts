import {NextFunction, Response, Request} from "express";
import jwt from "jsonwebtoken";
import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export default function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    res.locals.user = next();
  });
}
