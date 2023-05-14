import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";

const redeemCoupon = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    await prismaClient.coupon.update({
      where: { id },
      data: { redeemed: true },
    });
    res.status(200).json({ message: "Success" });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default redeemCoupon;
