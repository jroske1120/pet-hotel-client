import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET ROUTE FOR GETTING OWNER
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log( 'In GET on Owner router' );
    const queryString: string = `SELECT * FROM "owners"`;

    pool
      .query(queryString)
      .then((response: any): void => {
        res.send(response.rows);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

/**
 * POST ROUTE FOR ADDING OWENER TO DATABSE
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    //   get owner from request body
    console.log( `In owner router`, req.body.name )
    const owner: string = req.body.name;

    const queryText: string = `INSERT INTO "owners" ("name")
                                VALUES($1)`;

    pool.query( queryText, [ owner ] )
    .then( (response) => {
        res.sendStatus(201);
    })
    .catch( (error) => {
        console.log( `Error POSTING to the database`, error );
        res.sendStatus( 501 );
    })

  }); // end POST ROUTE

export default router;