import mongoose, { Schema } from "mongoose";
import { ProductVolume } from "../libs/enums/product.enum";
import { ProductSize } from "../libs/enums/product.enum";
import { ProductCollection } from "../libs/enums/product.enum";
import { ProductStatus } from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },

    productVolume: {
      type: String,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    productDesc: {
      type: String,
      required: true,
    },

    productImages: {
      type: [String],
      required: true,
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // UpdatedAt, createdAt
);

productSchema.index(
  { productName: 1, ProductSize: 1, ProductVolume: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
