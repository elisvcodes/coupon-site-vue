import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";

const getCoupons = async (req: Request, res: Response) => {
  try {
    const couponsData = await prismaClient.coupon.findMany({
      include: { brand: true },
    });
    res.status(200).json({ message: "Success", coupons: couponsData });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default getCoupons;
