import express from "express";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth/index";
import couponsRoute from "./routes/coupons/index";
import setupPassport from "./services/passport";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());

setupPassport(passport);

app.use("/auth", authRoutes);
app.use("/coupons", couponsRoute);

app.listen(PORT, () => console.log("is running "));
