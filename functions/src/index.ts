import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

/**
 * @fileOverview Punto de entrada para Firebase Functions.
 * Inicializa el SDK de Admin y exporta las funciones necesarias con tipado estricto.
 */

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request: functions.https.Request, response: functions.Response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Romi Store EC Functions: Online");
});
