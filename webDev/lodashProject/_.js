const _ = {
    clamp(number, lower, upper)
    {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

};




// Do not write or modify code below this line.
module.exports = _;
