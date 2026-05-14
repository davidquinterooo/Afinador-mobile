import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.afinadorMovile.app',
  appName: 'com.afinador-mobile.app',
  webDir: '.output/public',
  server: {
    androidScheme: 'http'
  }
};

export default config;
