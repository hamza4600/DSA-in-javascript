// same in js 
function run() {
    for (let i = 0; i < 100000; i++) {
        console.log(i);
    }
}

function loop() {
    // measure time
    const start = Date.now();
    run();
    const end = Date.now();
    console.log(`Time elapsed: ${end - start} ms`);
}

loop();  // time take is 352 ms  and by rust is 407 ms  and by c++ is 0.3445 s