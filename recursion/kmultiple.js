const kmultiple = (n, k) => {
    if (k === 0) {
        return;
    }

    kmultiple(n, k - 1);
    console.log(n * k);
};

kmultiple(2, 3);