//TODO 📗 Module 5. Logic and Control Flow - Lesson 06.01: Ternary Operator - Challenge


//TODO 📝 Step 4: Project Challenge – “Temperature-Based Outfit Suggestion”

//* 🎯 Objective
//  Write a function that gives a clothing suggestion based on the temperature using the ternary operator.

//* 🔧 Inputs
//  • temperature – a number (in °C or °F)
//  • (Optional) unit – string "C" or "F" if you want to extend this later

//* 🧠 Logic to Implement

//? Temperature                 Suggestion
//  ≥ 25°C or 77°F              "Wear shorts and a t-shirt"
//  Between 15 – 24°C           "Wear jeans and a light jacket"
//  < 15°C                      "Wear a coat and scarf"

//* 📌 Requirements
//  • Use ternary operators only (no if/else)
//  • Keep the function readable (you may use nested or chained ternaries)
//  • Use console.log() to show the result
//  • Function name: suggestOutfit(temperature)


//* 🧾 Stretch Goals (Optional)
//  • Allow input in either °C or °F (with conversion logic)
//  • Add emojis or icons to the suggestion (☀️, 🧥, ❄️)
//  • Use a ternary directly in the console.log() or return

//! Pseudocode

/*
/// Define inputs

temperature = number
unit = string ("C", "F")

FUNCTION suggestOutfit(temperature):

    RETURN temperature >= 25 ? "Wear shorts and a t-shirt"
            : temperature >=15 && temperature <= 24 ? "Wear jeans and a light jacket"
            : "Wear a coat and scarf";

END FUNCTION

console.log(suggestOutfit());
*/

//! Code: Return-Based Ternary Logic

let temperature = 0;
let unit = ["C", "F"];

function suggestOutfit(temperature) {
    return temperature >= 25 ? "Wear shorts and a t-shirt."
            : temperature >= 15 ? "Wear jeans and a light jacket."
            : "Wear a coat and scarf.";
}

console.log(suggestOutfit(15));  // Wear jeans and a light jacket.


//! Code: Console-Based Version

function suggestOutfit2(temperature) {
    console.log(
        temperature >= 25 ? "Wear shorts and a t-shirt."
        : temperature >= 15 ? "Wear jeans and a light jacket."
        : "Wear a coat and scarf."
    );
}

suggestOutfit2(1);  // Wear a coat and scarf.


//! Code: With Celsius/Fahrenheit Support (Stretch Goal)

function suggestOutfit(temperature, unit) {
    // Convert to Celsius if unit is "F"
    let tempInC = unit === "F" ? (temperature - 32) * 5 / 9 : temperature;

    return tempInC >= 25 ? "Wear shorts and a t-shirt."
            : tempInC >= 15 ? "Wear jeans and a light jacket."
            : "Wear a coat and scarf.";
}

console.log(suggestOutfit(30, "C"));  // Wear shorts and a t-shirt.
console.log(suggestOutfit(70, "F"));  // Wear jeans and a light jacket.
console.log(suggestOutfit(40, "F"));  // Wear a coat and scarf.