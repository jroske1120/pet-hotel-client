import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();
/**
 * POST route template
 */

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {console.log('userId:', req.body.userId)
  const sqlText = `INSERT INTO "pets" ("name", "breed", "color") VALUES ($1, $2, $3)`
  const queryText = [req.body.name, req.body.breed, req.body.color];
      pool.
        query(sqlText, queryText)
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('drop_info query error:', error);
            res.sendStatus(500);
        }); // end post query
});

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
