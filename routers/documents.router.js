// 이력서 관련

import express from "express";
import { prisma } from "../models/index.js";

const router = express.Router();

// 이력서 생성 | POST

router.post("/documents", async (req, res, next) => {
  return res.status(201).json({ data: post });
});

// 이력서 수정 | PUT

router.post("/documents/:documentId", async (req, res, next) => {
  return res.status(200).json({ data: "이력서가 수정되었습니다." });
});

// 이력서 삭제 | DELETE

router.delete("/documents/:documentId", async (req, res, next) => {
  return res.status(200).json({ data: "게시글이 삭제되었습니다." });
});

// 이력서 목록 조회 | READ

// 이력서 상세 조회 | READ

export default router;
