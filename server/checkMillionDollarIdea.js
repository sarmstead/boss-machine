const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    const ideaValue = numWeeks * weeklyRevenue;
    if ((ideaValue >= 1000000) && (numWeeks !== undefined) && (!isNaN(numWeeks)) && (weeklyRevenue !== undefined) && (!isNaN(weeklyRevenue))) {
        next();
    } else {
        res.status(400).send();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
