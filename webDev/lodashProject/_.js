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
    },

    words(string)
    {
        return string.split(' ');
    },

    pad(string='', length=0, chars=' ')
    {
        if (length <= string.length)
        {
            return string;
        }

        const padStartAmt = Math.floor((length - string.length) / 2);
        const padEndAmt = length - string.length - padStartAmt;
        const padStart = chars.repeat(padStartAmt);
        const padEnd = chars.repeat(padEndAmt);

        const paddedString = padStart + string + padEnd;
        return paddedString;
    },

    has(object, key)
    {
        hasValue = object[key] !== undefined;
        return hasValue;
    },


};


// Do not write or modify code below this line.
module.exports = _;
