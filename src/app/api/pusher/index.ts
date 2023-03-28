import Pusher from 'pusher';

export const pusher = new Pusher({
  host: process.env.NEXT_PUSH_APP_HOST,
  port: process.env.NEXT_PUSH_APP_PORT,
  appId: process.env.NEXT_PUSH_APP_ID,
  key: process.env.NEXT_PUSH_APP_KEY,
  secret: process.env.NEXT_PUSH_APP_SECRET,
  useTLS: process.env.NEXT_PUSH_APP_TLS === 'true',
});

export default async function handler(req, res) {
  const { message, sender } = req.body;
  const response = await pusher.trigger("chat", "chat-event", {
    message,
    sender,
  });

  res.json({ message: "completed" });
}