import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyBlgPZMYZh7UtM1yN9nxpQ0fq3R7KbWGpk",
  authDomain: "test-d5869.firebaseapp.com",
  projectId: "test-d5869",
  storageBucket: "test-d5869.appspot.com",
  messagingSenderId: "184243924885",
  appId: "1:184243924885:web:ffbf2c1de9cf913727909c"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore())]
};
