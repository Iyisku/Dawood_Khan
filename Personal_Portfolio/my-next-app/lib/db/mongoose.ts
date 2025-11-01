import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cachedConnection: Mongoose | null = null;
let connectionPromise: Promise<Mongoose> | null = null;

export async function connectDB(): Promise<Mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  // Prevent multiple simultaneous connection attempts
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = (async () => {
    try {
      console.log('Connecting to MongoDB:', MONGODB_URI);
      const connection = await mongoose.connect(MONGODB_URI, {
        retryWrites: true,
        w: 'majority',
      });
      cachedConnection = connection;
      console.log('✓ MongoDB connected successfully');
      return connection;
    } catch (error) {
      console.error('✗ MongoDB connection failed:', error instanceof Error ? error.message : error);
      connectionPromise = null; // Reset so it can try again
      throw new Error(`Failed to connect to MongoDB: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  })();

  return connectionPromise;
}

export async function disconnectDB(): Promise<void> {
  if (cachedConnection) {
    await mongoose.disconnect();
    cachedConnection = null;
  }
}
