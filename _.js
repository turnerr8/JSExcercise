
const _ = {
    //clamp
    clamp(number, lowBounds, highBounds) {
        return Math.max(lowBounds, Math.min(number, highBounds));
    },


    inRange(number, startValue, endValue)  {
        if (endValue = null) {
            endValue = startValue;
            startValue = 0;
        }
        if (startValue > endValue) {
            let temp = startValue;
            startValue = endValue;
            endValue = temp;
        }
        
        if(number > startValue && number < endValue) {
            return true;
        } else {
            return false;
        }
    },

    words(string) {
        let words = string.split(' ');
        return words;
    },

    pad(string, length) {

        if(length < string.length) {
            return string;
        } else {
            length -= string.length;
        }

        let startPad;
        let endPad;

        if(length%2 != 0) {
             startPad = length/2 - .5;
             endPad = length/2 + .5;
        } else {
             startPad = length/2;
             endPad = length/2;
        }

        let startSpace ='';
        let endSpace = '';

        let pad = '';
        length = length/2;
        for (let i = 0; i < startPad; i++) {
            startSpace += ' ';
        }
        for (let i = 0; i < endPad; i++) {
            endSpace += ' ';
        }
        return startSpace + string + endSpace;
    },

    has(object, key) {
        if(object[key]) {
            return true;
        } else {
            return false;
        }
    },

    invert(object) {
        const invertedObj = {}
        for(x in object) {
            let originalValue = object[x];
            invertedObj[originalValue] =x;
        }
        return invertedObj;
    }

    
};




// Do not write or modify code below this line.
module.exports = _;