import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  role: string;
  company: string;
  description: string;
  date: string;
  techUsed: string;
  createdAt: Date;
  updatedAt: Date;
}

const experienceSchema = new Schema<IExperience>(
  {
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
      maxlength: [100, 'Role cannot exceed 100 characters'],
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true,
      maxlength: [100, 'Company cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
      trim: true,
    },
    techUsed: {
      type: String,
      required: [true, 'Technologies used is required'],
      trim: true,
      maxlength: [500, 'Technologies cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Create index for faster queries
experienceSchema.index({ company: 1, role: 1 });

export const Experience =
  mongoose.models.Experience ||
  mongoose.model<IExperience>('Experience', experienceSchema);
