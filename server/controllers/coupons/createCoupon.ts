import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";
import bcrypt from "bcrypt";
import { Coupon, User } from "@prisma/client";
import { assert, object, string, size, refine } from "superstruct";
import isEmail from "isemail";

const Coupon = object({
  // inputs have to be between 2 and 100 characters long
  title: size(string(), 2, 100),
  brand: size(string(), 2, 100),
  percentageOff: size(string(), 2, 100),
  couponCode: size(string(), 2, 100),
});

const createCoupon = async (req: Request, res: Response) => {
  try {
    assert(req.body, Coupon);
    const { title, brand, percentageOff, couponCode } = req.body;
    const user = req.user;

    if (!user?.id) {
      throw Error("Whoops, you are not allowed to do create coupons");
    }

    const couponData: Partial<Coupon> = await prismaClient.coupon.create({
      data: { title, percentageOff, couponCode, userId: user?.id },
    });

    const brandData = await prismaClient.brand.create({
      data: { title: brand, couponId: couponCode },
    });

    // return res.status(201).json({
    //   message: "Success",
    //   user,
    // });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createCoupon;
