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
        const queryString: string = `SELECT "owners"."name" as owners_name, "pets"."name" as pets_name, 
        "breed", "color", "checked_in", "pets"."id" FROM "pets" JOIN  "owners" ON "pets"."id" = "owners"."pet_id";`;

        pool
            .query(queryString)
            .then((response: any): void => {
                res.send(response.rows);
                console.log(response.rows);

            })
            .catch((err: string): void => {
                console.log(err);
                res.sendStatus(500);
            });
    }
);

export default router;
