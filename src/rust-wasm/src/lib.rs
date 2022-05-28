extern crate rand;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b + 765
}

#[wasm_bindgen]
pub fn simulated_expensive_calculation(intensity: u32) -> u32 {
    println!("calculating slowly...");
    // thread::sleep(Duration::from_secs(2));
    intensity
}
