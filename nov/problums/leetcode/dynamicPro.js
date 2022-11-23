// Dynamic programming and memoization

// Fibo 
function fibo1(n) { // o(2^n)
    if (n <= 1) return n;
    return fibo1(n - 1) + fibo1(n - 2);
}

function fibo2(n) { // o(n)
    let memo = [0, 1];
    let fib = (n) => {
        if (memo[n] != null) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    return fib(n);
}

// iterative
function fibo3(n) {  // o(n)
    if (n <= 1) return n;
    let a = 0, b = 1, f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

// 