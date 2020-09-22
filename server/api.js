const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

// '/api/minions' routes
apiRouter.param('minions', (req, res, next, id) => {});

// '/api/ideas' routes
apiRouter.param('ideas', (req, res, next, id) => {});

// '/api/meetings' routes
apiRouter.param('meetings', (req, res, next, id) => {});

module.exports = apiRouter;
