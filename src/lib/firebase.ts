import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

// This helper checks if we have a valid configuration file
async function getFirebaseConfig() {
  try {
    // Using a dynamic string and casting to avoid build-time resolution errors when the file is missing
    const configPath = './firebase-applet-config.json';
    const config = await import(/* @vite-ignore */ `${configPath}`);
    return config.default;
  } catch (e) {
    console.debug('Firebase config not found. Please complete setup in the AI Studio UI.');
    return null;
  }
}

/**
 * Initializes Firebase if a configuration is available.
 */
export async function initFirebase() {
  if (app) return app;
  
  if (getApps().length > 0) {
    app = getApp();
  } else {
    const config = await getFirebaseConfig();
    if (config && config.apiKey && config.apiKey !== "YOUR_API_KEY") {
      app = initializeApp(config);
    }
  }
  return app;
}

/**
 * Gets the Auth instance. Returns null if Firebase is not initialized.
 */
export const getFirebaseAuth = () => {
  if (auth) return auth;
  if (!app) {
    // Try to get existing default app if it was initialized elsewhere
    try {
      app = getApp();
    } catch (e) {
      return null;
    }
  }
  auth = getAuth(app);
  return auth;
};

/**
 * Gets the Firestore instance. Returns null if Firebase is not initialized.
 */
export const getFirebaseDb = () => {
  if (db) return db;
  if (!app) {
    try {
      app = getApp();
    } catch (e) {
      return null;
    }
  }
  db = getFirestore(app);
  return db;
};

// Legacy placeholders to maintain compatibility without crashing
export const authInstance = null as unknown as Auth;
export const dbInstance = null as unknown as Firestore;
export { app };
