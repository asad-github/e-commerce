import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    logo: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },

    forgotPwdToken: String,
    forgotPwdTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.models.vendor || mongoose.model("vendor", vendorSchema);

export default Vendor;
