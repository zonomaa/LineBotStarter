import { functions } from 'firebaseApp';
import lineClient from 'lineClient';
import { TextMessage } from '@line/bot-sdk';

exports.line = functions.https.onRequest(async (request, response) => {
  const body = request.body;
  const events = body.events;

  for (const event of events) {
    const {
      replyToken,
      type,
      // source: { userId },
      message,
    } = event;
    if (type == 'message') {
      if (message.type == 'text') {
        const helloMessage: TextMessage = {
          type: 'text',
          text: 'Hello',
        };
        await lineClient.replyMessage(replyToken, helloMessage);
        response.status(200).send('OK');
      }
    }
  }
});
