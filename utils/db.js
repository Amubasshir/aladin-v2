import mongoose from 'mongoose';
const connection = {};

export async function connectDb() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connection[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection to database');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('new connection to database');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnecting from database');
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
