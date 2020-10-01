const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

// '/api/minions' routes
// apiRouter.param('minions', (req, res, next, id) => {});

apiRouter.get('/minions', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
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

apiRouter.put('/minions/:minionId', (req, res, next) => {
    const newMinion = req.body;
    const minionId = req.params.minionId;
    const minion = db.getFromDatabaseById('minions', minionId);
    const minionIdNaN = isNaN(Number(minionId));
    if (minionId !== undefined && minion !== undefined && !minionIdNaN) {
        db.updateInstanceInDatabase('minions', newMinion);
        res.status(200).send(newMinion);
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = db.getFromDatabaseById('minions', minionId);
    const minionIdNaN = isNaN(Number(minionId));
    if (minionId !== undefined && minion !== undefined && !minionIdNaN) {
        db.deleteFromDatabasebyId('minions', minionId);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// '/api/ideas' routes
// apiRouter.param('ideas', (req, res, next, id) => {});
apiRouter.get('/ideas', (req, res, next) => {
    res.send(db.getAllFromDatabase('ideas'));
});

apiRouter.post('/ideas', (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    if ((name !== undefined) && (description !== undefined) && (numWeeks !== undefined) && (weeklyRevenue !== undefined)) {
        db.addToDatabase('ideas', req.body);
        res.status(201).send(req.body);
    } else {
        res.status(404).send();
    }
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const ideaIdNaN = isNaN(Number(ideaId));
    const idea = db.getFromDatabaseById('ideas', ideaId);
    if (ideaId !== undefined && !ideaIdNaN && idea !== undefined) {
        res.send(idea);
    } else {
        res.status(404).send();
    }
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const newIdea = req.body;
    const ideaId = req.params.ideaId;
    const idea = db.getFromDatabaseById('ideas', ideaId);
    const ideaIdNaN = isNaN(Number(ideaId));
    if (ideaId !== undefined && idea !== undefined && !ideaIdNaN) {
        db.updateInstanceInDatabase('ideas', newIdea);
        res.status(200).send(newIdea);
    } else {
        res.status(404).send();
    }
});

// '/api/meetings' routes
apiRouter.param('meetings', (req, res, next, id) => {});

module.exports = apiRouter;
