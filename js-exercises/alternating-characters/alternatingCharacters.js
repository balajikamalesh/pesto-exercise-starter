function alternatingCharacters(arr) {
    let deleteCountArray = [];

    for (let k = 0; k < arr.length; k++) {
        let c = '';
        let deleteCount = 0;
        for (let i = 0; i < arr[k].length; i++) {
            if (c !== arr[k][i])
                c = arr[k][i];
            else
                deleteCount++;    
            }
        deleteCountArray.push(deleteCount);
    }
    
    return deleteCountArray;
}

export { alternatingCharacters };
