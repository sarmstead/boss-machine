const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

// '/api/minions' routes
// apiRouter.param('minions', (req, res, next, id) => {});

apiRouter.get('/minions', (req, res, next) => {
    const minionsArr = db.getAllFromDatabase('minions');
    res.send(minionsArr);
});

apiRouter.post('/minions', (req, res, next) => {
    const name = req.body.name;
    const title = req.body.title;
    const salary = req.body.salary;
    if ((name !== undefined) && (title !== undefined) && (salary !== undefined)) {
        db.addToDatabase('minions', req.body);
        res.status(201).send(req.body);
    } else {
        res.status(400).send();
    }
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minionIdNaN = isNaN(Number(minionId));
    const minion = db.getFromDatabaseById('minions', minionId);
    if (minionId !== undefined && !minionIdNaN && minion !== undefined) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

// '/api/ideas' routes
apiRouter.param('ideas', (req, res, next, id) => {});

// '/api/meetings' routes
apiRouter.param('meetings', (req, res, next, id) => {});

module.exports = apiRouter;
