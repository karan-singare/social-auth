import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tv.mogiio.ott.dev.arka',
  appName: 'social-auth',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {},
  plugins: {
    GoogleAuth: {
      "scopes": ["profile", "email"],
      'serverClientId': '541915483304-542ghfs1h8dcqs1qmma9qffriqk9qhep.apps.googleusercontent.com',
      'forceCodeForRefreshToken': true
    },
    SplashScreen: {
      "launchShowDuration": 1000,
      "launchAutoHide": false,
      "backgroundColor": "#000000",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "androidSpinnerStyle": "horizontal",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": true,
      "splashImmersive": false,
      "layoutName": "launch_screen",
      "useDialog": false
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  }
};

export default config;
