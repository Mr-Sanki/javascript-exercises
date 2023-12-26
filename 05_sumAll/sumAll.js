const sumAll = function(minNum, maxNum) {
    if (minNum<0 || maxNum<0 || typeof minNum !== "number" || typeof maxNum!== "number") {
        return 'ERROR'
    } else {
        let sum =0;
        let newMin = Math.min(minNum, maxNum);
        let newMax = Math.max(minNum, maxNum);
        for (let i = newMin; i <= newMax; i++) {
            sum+=i;
            
        }
        return sum;
    }
    
};


// Do not edit below this line
module.exports = sumAll;
