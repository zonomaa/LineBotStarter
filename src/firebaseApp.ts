import * as functionsApp from 'firebase-functions';

const REGION = 'asia-northeast1';
const runtimeOpts: functionsApp.RuntimeOptions = {
  timeoutSeconds: 60,
  memory: '2GB',
};
export const functions = functionsApp.region(REGION).runWith(runtimeOpts);
