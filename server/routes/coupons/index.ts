import express from "express";
import createCoupon from "../../controllers/coupons/createCoupon";
import passport from "passport";
const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createCoupon
);

export default router;
