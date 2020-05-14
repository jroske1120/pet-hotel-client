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
    const queryString: string = `SELECT "owners"."id", "owners"."name", COUNT("pets"."id") AS "pet_count" FROM "pets"
                                  FULL OUTER JOIN "owners" ON "pets"."owner_id" = "owners"."id"
                                  GROUP BY "owners"."id"
                                  ORDER BY "name";`;

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

  /**
 * DELETE ROUTE FOR DELETING OWNER FROM DATABSE
 */
router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    //   get owner id from req.params
    console.log( `Deleting owner with id`, req.params.id )
    const id: number = Number(req.params.id);

    const queryTextOne: string = `DELETE FROM "pets" WHERE "pets"."owner_id" = $1`;
    const queryTextTwo: string = `DELETE FROM "owners" WHERE "id" = $1;`;

    pool.query( queryTextOne, [ id ] )
      .then( (response) => {
        pool.query( queryTextTwo, [ id ] )
        .then( (response) => {
          res.sendStatus( 201 );
        })
        .catch( (error) => {
          console.log( 'Error deleting owner from database', error );
        })
      })
      .catch( (error) => {
        console.log( 'Error deleting owners pets from database', error );
      })

  }); // end DELETE ROUTE

export default router;