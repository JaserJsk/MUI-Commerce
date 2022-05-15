// Types
import { ConfigProps } from 'types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days',
};

// Project Settings -> Your Apps -> [Add New Webapp] -> configuration
export const FIREBASE_API = {
  apiKey: 'AIzaSyBernKzdSojh_vWXBHt0aRhf5SC9VLChbM',
  authDomain: 'starter-kit.firebaseapp.com',
  projectId: 'starter-kit',
  storageBucket: 'starter-kit.appspot.com',
  messagingSenderId: '901111229354',
  appId: '1:901111229354:web:a5ae5aa95486297d69d9d3',
  measurementId: 'G-MGJHSL8XW3',
};

export const AUTH0_API = {
  client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
  domain: 'dev-w0-vxep3.us.auth0.com',
};

export const AWS_API = {
  poolId: 'us-east-1_AOfOTXLvD',
  appClientId: '3eau2osduslvb7vks3vsh9t7b0',
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
