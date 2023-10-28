import { initializeTestEnvironment } from "@firebase/rules-unit-testing";
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Define a test app's Firebase configuration
const testAppConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
};

// Initialize Firebase app and Firestore emulator
const testApp = initializeApp(testAppConfig);
const db = getFirestore(testApp);

if (import.meta.env.MODE === "development") {
  const emulatorHost = "localhost";
  const emulatorPort = import.meta.env.VITE_DEV_DB_PORT;
  connectFirestoreEmulator(db, emulatorHost, emulatorPort);
}

// Initialize Firebase rules test environment
const testEnv = await initializeTestEnvironment({
  projectId: "test-project-id", // Use a unique project ID for testing
});

export { testEnv, db };
