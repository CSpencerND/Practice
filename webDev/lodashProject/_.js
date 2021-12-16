const _ = {

    clamp(number, lower, upper)
    {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end=undefined)
    {
        if (end === undefined)
        {
            end = start;
            start = 0;
        }

        if (start > end)
        {
            let temp = start;
            start = end; end = temp; delete temp;
        }

        const isInRange = (number >= start && number < end);
        return isInRange;
    }

};




// Do not write or modify code below this line.
module.exports = _;
