// Types
import { ConfigProps } from 'types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days',
};

// Project Settings -> Your Apps -> [Add New Webapp] -> configuration
export const FIREBASE_API = {
  apiKey: 'AIzaSyACK1ClqS3f3fy467IZ2O6xoCMptjrxG50',
  authDomain: 'mui-commerce-app-reactjs.firebaseapp.com',
  projectId: 'mui-commerce-app-reactjs',
  storageBucket: 'mui-commerce-app-reactjs.appspot.com',
  messagingSenderId: '705489681626',
  appId: '1:705489681626:web:e1f0a4583aed0a6e25f9e3',
  measurementId: 'G-BP7Q1FXYQL',
};

export const AUTH0_API = {
  client_id: 'CLIENT ID',
  domain: 'DOMAIN',
};

export const AWS_API = {
  poolId: 'POOL ID',
  appClientId: 'APP CLIENT ID',
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/mui-commerce-app/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard/default';

const config: ConfigProps = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light',
  presetColor: 'default',
  locale: 'en',
  rtlLayout: false,
  container: false,
};

export default config;
