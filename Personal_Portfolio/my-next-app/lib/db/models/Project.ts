import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  image?: string;
  link: string;
  status: 'Active' | 'Completed' | 'In Progress' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    image: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      required: [true, 'Link is required'],
      trim: true,
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'Please provide a valid URL',
      ],
    },
    status: {
      type: String,
      enum: ['Active', 'Completed', 'In Progress', 'Archived'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for faster queries
projectSchema.index({ status: 1 });
projectSchema.index({ title: 'text', description: 'text' });

export const Project =
  mongoose.models.Project ||
  mongoose.model<IProject>('Project', projectSchema);
