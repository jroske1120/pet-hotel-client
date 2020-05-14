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

export default router;
