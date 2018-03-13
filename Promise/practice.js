let allPromises = [];

for (let i = 0; i < 100; i++) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("from " + i);
            resolve();
        }, i * 1000);
    });

    allPromises.push(promise);
    
    
}

Promise.all(allPromises).then(() => {
console.log("all done");
})