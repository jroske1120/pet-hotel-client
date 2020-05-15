import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();
/**
 * POST route template
 */

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
  const sqlText = `INSERT INTO "pets" ("name", "breed", "color", "owner_id") VALUES ($1, $2, $3, $4)`
  const queryText = [req.body.name, req.body.breed, req.body.color, req.body.owner_id];
  console.log('user_id:', req.body.user_id)

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

router.put(
  '/checkin/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const pet_id: string = req.params.id;
    const checked_in: boolean = req.body.checked_in;

        const queryText:string = `UPDATE pets SET checked_in = $1 WHERE id = $2;`;
        pool.query(queryText,[checked_in,pet_id]).then((result) => {
          res.sendStatus(204);
        }).catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
        });
  }
);


export default router;
