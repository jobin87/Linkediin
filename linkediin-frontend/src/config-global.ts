
import packageJson from '../package.json';
import { paths } from './routes/paths';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  baseUrl: string;
  assetsDir: string;
  auth: {
    skip: boolean;
    redirectPath: string;
  };
  mapboxApiKey: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'linkediin',
  appVersion: packageJson.version,
  baseUrl: import.meta.env.VITE_AUTH_BASE_URL ?? "",
  assetsDir: import.meta.env.VITE_AUTH_ASSETS_DIR ?? '',
  auth: {
    skip: false,
    redirectPath: paths.onboarding.root,
  },
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? '',
};
