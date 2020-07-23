import * as express from "express";
let router = express.Router();

/**
 * @GET /echo/ - unprotected
 * Test endpoint
*/
router.get('/', (req, res) => {
    res.status(200).json({ message: 'You have reached an un-protected API endpoint.' });
});


export = router;
