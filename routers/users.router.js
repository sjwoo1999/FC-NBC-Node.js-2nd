// 사용자 관련

import express from "express";
import { prisma } from "../utils/prisma/index.js";
import bcrypt from "bcrypt";

const router = express.Router();

/* 사용자 회원가입 API */

router.post("/sign-up", async (req, res, next) => {
  const { email, password } = req.body;
  const isExistUser = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (isExistUser) {
    return res.status(409).json({ message: "이미 존재하는 이메일입니다." });
  }

  // 사용자 비밀번호를 암호화합니다.
  const hasedPassword = await bcrypt.hash(password, 10);

  // Users 테이블에 사용자를 추가합니다.
  const user = await prisma.users.create({
    data: {
      email,
      password: hashedPassword, // 암호화된 비밀번호를 저장합니다.
    },
  });

  return res.status(201).json({ message: "회원가입이 완료되었습니다." });
});

export default router;
