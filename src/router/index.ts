import express from 'express';

import main from './main';
// import users from './users';

const router = express.Router();

export default (): express.Router => {
    main(router);
    // users(router);
    return router;
}