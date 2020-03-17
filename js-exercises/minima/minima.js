function minima(k, arr) {
  let len = arr.length;
    for (let i = 0; i < k; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr.slice(0, k);
}

export { minima };
