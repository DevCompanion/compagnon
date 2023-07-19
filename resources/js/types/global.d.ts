import { type AxiosInstance } from 'axios';
import { type Config as ZiggyConfig } from 'ziggy-js';
import type ziggyRoute from 'ziggy-js';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  let route: typeof ziggyRoute;
  let Ziggy: ZiggyConfig;
}
