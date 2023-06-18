import db from '../../utils/db';

export default async function handler(req, res) {
  try {
    await db.connectDb();
    res.status(200).json({ name: 'John Doe' });

    await db.disconnectDb();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
