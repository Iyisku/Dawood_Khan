import mongoose, { Schema, Document } from 'mongoose';

export interface IAbout extends Document {
  introText: string;
  detailedBio: string;
  createdAt: Date;
  updatedAt: Date;
}

const aboutSchema = new Schema<IAbout>(
  {
    introText: {
      type: String,
      required: [true, 'Intro text is required'],
      trim: true,
      default: 'I\'m a passionate, Developer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.',
    },
    detailedBio: {
      type: String,
      required: [true, 'Detailed bio is required'],
      trim: true,
      default: 'I began my journey as a web developer in 2023, and since then, I\'ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. I\'m building cutting-edge web applications using modern technologies such as Next.js, React.js, TailwindCSS and much more.',
    },
  },
  {
    timestamps: true,
  }
);

export const About =
  mongoose.models.About ||
  mongoose.model<IAbout>('About', aboutSchema);
