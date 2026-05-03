import mongoose, { Schema, Document } from 'mongoose';

export interface ILanding extends Document {
  name: string;
  rolePart1: string;
  rolePart2: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const landingSchema = new Schema<ILanding>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      default: 'Dawood Khan',
    },
    rolePart1: {
      type: String,
      required: [true, 'Role Part 1 is required'],
      trim: true,
      default: 'Software',
    },
    rolePart2: {
      type: String,
      required: [true, 'Role Part 2 is required'],
      trim: true,
      default: 'Engineer',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      default: 'Hi, I\'m Dawood Khan, a passionate Software Engineer with a knack for quickly adapting to new technologies. With expertise in MongoDB, Express.js, React, Node.js, C# and Unity. I specialize in building dynamic, scalable, and high-performance web applications And Games. My ability to swiftly grasp and implement emerging tools and frameworks allows me to stay ahead in the ever-evolving tech landscape. I thrive on solving complex challenges and delivering seamless user experiences.',
    },
  },
  {
    timestamps: true,
  }
);

export const Landing =
  mongoose.models.Landing ||
  mongoose.model<ILanding>('Landing', landingSchema);
