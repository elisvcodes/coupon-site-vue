import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";

const search = async (req: Request, res: Response) => {
  const { brand } = req.params;
  try {
    const couponsData = await prismaClient.coupon.findMany({
      where: { brand: { title: { contains: brand } }, redeemed: false },
      include: { brand: true },
    });
    res.status(200).json({ message: "Success", coupons: couponsData });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default search;
