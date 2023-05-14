import express from "express";
import passport from "passport";
import createCoupon from "../../controllers/coupons/createCoupon";
import getCoupons from "../../controllers/coupons/getCoupons";
import search from "../../controllers/coupons/search";
import redeemCoupon from "../../controllers/coupons/redeemCoupon";
const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createCoupon
);
router.get("/all", getCoupons);
router.get("/search/:brand", search);
router.put("/redeem", redeemCoupon);

export default router;
