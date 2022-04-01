fn main() {
    println!("Hello, World!");

    let nums: [i8; 5] = [1, 2, 3, 4, 5];

    for i in &nums {
        println!("{}", i);
    }
}
