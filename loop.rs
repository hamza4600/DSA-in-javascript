// simle loop
#![allow(dead_code)]

use std::time::Instant;

fn lop_1() {
    let mut x = 1;
    loop {
        x += 1;
        if x == 10 {
            break;
        }
    }
    println!("x = {}", x);
}

fn lop_2() {
    let mut j = 1;
    while j < 100000 {
        j += 1;
        println!("j = {}", j);
    }
}
fn lop_3() {
    for i in 1..100000 {
        println!("i = {}", i);
    }
}
fn main() {
    // lop_1();
    // lop_3();
    let start = Instant::now();
    lop_3();
    let duration = start.elapsed();
    println!("Time elapsed in expensive_function() is: {:?}", duration);
}
