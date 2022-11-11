import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import checkErrors from './checkErrors';
import HandleErrors from './handleErrors';

const middlewares = (app: Application) => {
  app.use(
    cors({
      origin: '*',
      methods: 'GET, PUT, POST, DELETE',
    })
  );

  app.use((_: Request, res: Response, next: NextFunction) => {
    res.header({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });

    next();
  });

  app.use(express.json()); // Serialize the req.body to JSON

  app.use(express.urlencoded({ extended: true }));

  app.use(express.static('public'));

  // -> Handle Server Errors <-
  const { logErrors, errorHandler, clientErrorHandler } = new HandleErrors();
  
  app.use(logErrors);
  app.use(clientErrorHandler);
  app.use(errorHandler);
};

export { middlewares, checkErrors };
