import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Cached connection for Next.js serverless — avoids creating a new connection on every invocation.
 * @see https://mongoosejs.com/docs/nextjs.html
 */
const globalWithMongoose = globalThis;

if (!globalWithMongoose._mongooseCache) {
  globalWithMongoose._mongooseCache = { conn: null, promise: null };
}

const cache = globalWithMongoose._mongooseCache;

/**
 * Connect to MongoDB (idempotent).
 * @returns {Promise<typeof mongoose>}
 */
export default async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    const opts = {
      bufferCommands: false,
    };
    cache.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m);
  }

  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = null;
    throw err;
  }

  return cache.conn;
}
