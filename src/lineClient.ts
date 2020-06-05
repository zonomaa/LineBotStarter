import { Client } from '@line/bot-sdk';
import lineConfig from 'env/line.json';

const lineClient = new Client(lineConfig);

export default lineClient;
