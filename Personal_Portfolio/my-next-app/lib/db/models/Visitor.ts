import mongoose, { Schema, Document } from 'mongoose';

export interface IVisitor extends Document {
  visitorId: string;
  views: number;
  lastVisit: Date;
}

const visitorSchema = new Schema<IVisitor>(
  {
    visitorId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    views: {
      type: Number,
      default: 1,
    },
    lastVisit: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Visitor =
  mongoose.models.Visitor ||
  mongoose.model<IVisitor>('Visitor', visitorSchema);
