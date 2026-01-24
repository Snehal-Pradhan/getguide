import 'dotenv/config';
import express from 'express';
import { verifyWebhook } from '@clerk/express/webhooks';
import { clerkMiddleware, getAuth, requireAuth } from '@clerk/express';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (_, res) => {
  return res.json({ message: 'server is healthy' });
});

app.post('/api/webhooks', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const evt = await verifyWebhook(req);
    const { id } = evt.data;
    const eventType = evt.type;
    if (evt.type === 'user.created') {
      console.log('userId:', evt.data.id);
    }

    return res.send('Webhook received');
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return res.status(400).send('Error verifying webhook');
  }
});

app.use(clerkMiddleware());
app.use(requireAuth());

app.post('/sync-user', async (req, res) => {
  const { userId } = getAuth(req);
  const { name } = req.body;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const newUser = {
      data: {
        clerk_id: userId,
        name: name,
      },
    };
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
