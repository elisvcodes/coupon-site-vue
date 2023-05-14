import express from "express";
import createCoupon from "../../controllers/coupons/createCoupon";
import getCoupons from "../../controllers/coupons/getCoupons";
import search from "../../controllers/coupons/search";
import passport from "passport";
const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createCoupon
);
router.get("/all", getCoupons);
router.get("/search/:brand", search);

export default router;
