const removeFromArray = function(arr, ...arrgs) {
    for (let i = 0; i < arrgs.length; i++) {
        const index = arr.indexOf(arrgs[i]);
        if (index !== -1) {
            arr.splice(index, 1);
          }
    }
    return arr;
};  

// Do not edit below this line
module.exports = removeFromArray;
