const checkMillionDollarIdea = (numWeeks, weeklyRevenue) => {
    const ideaValue = numWeeks * weeklyRevenue;
    if (ideaValue >= 1000000) {
        return true;
    } else {
        return false;
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
