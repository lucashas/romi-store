import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

/**
 * @fileOverview Punto de entrada para Firebase Functions.
 * Inicializa el SDK de Admin y exporta las funciones necesarias.
 */

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Romi Store EC Functions: Online");
});
