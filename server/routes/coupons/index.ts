import express from "express";
import createCoupon from "../../controllers/coupons/createCoupon";
import getCoupons from "../../controllers/coupons/getCoupons";
import passport from "passport";
const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createCoupon
);

router.get("/all", getCoupons);

export default router;
