import * as functions from "firebase-functions";
import { Request, Response } from "firebase-functions";

/**
 * @fileOverview Punto de entrada para Firebase Functions.
 * Implementa una función de prueba helloWorld con tipado estricto.
 */

export const helloWorld = functions.https.onRequest((request: Request, response: Response) => {
  response.send("Hello from Firebase!");
});
