const _ = {

    // number methods
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end = undefined) {
        if (end === undefined) {
            end = start;
            start = 0;
        }

        if (start > end) {
            let temp = start;
            start = end; end = temp;
        }

        const isInRange = (number >= start && number < end);
        return isInRange;
    },

    // string methods
    words(string) {
        return string.split(' ');
    },

    pad(string = '', length = 0, chars = ' ') {
        if (length <= string.length) {
            return string;
        }

        const padStartAmt = Math.floor((length - string.length) / 2);
        const padEndAmt = length - string.length - padStartAmt;
        const padStart = chars.repeat(padStartAmt);
        const padEnd = chars.repeat(padEndAmt);

        const paddedString = padStart + string + padEnd;
        return paddedString;
    },

    // object methods
    has(object, key) {
        hasValue = object[key] !== undefined;
        return hasValue;
    },


    invert(object) {
        const invertedObject = {};

        for (let key in object) {
            const orijValue = object[key];
            invertedObject[orijValue] = key;
        }

        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) {
                return key;
            }
        }
    },

    // array methods
    drop(array, n = 1) {
        return array.slice(n)
    },

    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });
        return this.drop(array, dropNumber);
    },

    chunk(array, size = 1) {
        let chunkArray = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size );
            chunkArray.push(arrayChunk);
        }
        return chunkArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;
