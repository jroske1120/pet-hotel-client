import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "owners"`;

    pool
      .query(queryString)
      .then((response: any): void => {
        res.send(response);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    res.sendStatus(201);
  }
);

/**
 * DELETE ROUTE
 */
router.delete(
  '/delete/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log('in delete route');
    let pet_id: string = req.params.id;
        console.log('speech id is', pet_id);

        //Deletes a speech from the speech_info table
        const queryText:string = `DELETE FROM pets WHERE id = $1;`;
        pool.query(queryText,[pet_id]).then((result) => {
                res.sendStatus(202);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
  }
);

export default router;
