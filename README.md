# 📗 Module 5. Logic and Control Flow - Lesson 06.01: Ternary Operator - Challenge
## 📝 Step 4: Project Challenge – Temperature-Based Outfit Suggestion

---

## 🎯 Objective

Create a function that suggests clothing based on the current temperature using **ternary operators**.

---

## 🔧 Inputs

- `temperature` – number (e.g., 25 or 70)
- `unit` – optional, `"C"` or `"F"` (defaults to `"C"` if not used)

---

## 🧠 Logic Overview

| Temperature in Celsius | Suggestion                    |
|------------------------|-------------------------------|
| ≥ 25°C                 | "Wear shorts and a t-shirt."  |
| 15–24°C                | "Wear jeans and a light jacket." |
| < 15°C                 | "Wear a coat and scarf."       |

---

## ✅ Implementation 1: Return-Based Ternary Logic

```javascript
function suggestOutfit(temperature) {
    return temperature >= 25 ? "Wear shorts and a t-shirt."
         : temperature >= 15 ? "Wear jeans and a light jacket."
         : "Wear a coat and scarf.";
}

console.log(suggestOutfit(15));  // Wear jeans and a light jacket.
```

---

## ✅ Implementation 2: Console-Based Version

```javascript
function suggestOutfit2(temperature) {
    console.log(
        temperature >= 25 ? "Wear shorts and a t-shirt."
      : temperature >= 15 ? "Wear jeans and a light jacket."
      : "Wear a coat and scarf."
    );
}

suggestOutfit2(1);  // Wear a coat and scarf.
```

---

## ✅ Implementation 3: With Celsius/Fahrenheit Support (Stretch Goal)

```javascript
function suggestOutfit(temperature, unit) {
    let tempInC = unit === "F" ? (temperature - 32) * 5 / 9 : temperature;

    return tempInC >= 25 ? "Wear shorts and a t-shirt."
         : tempInC >= 15 ? "Wear jeans and a light jacket."
         : "Wear a coat and scarf.";
}

console.log(suggestOutfit(30, "C"));  // Wear shorts and a t-shirt.
console.log(suggestOutfit(70, "F"));  // Wear jeans and a light jacket.
console.log(suggestOutfit(40, "F"));  // Wear a coat and scarf.
```

---

## 📌 Highlights

- Uses **ternary operators only**
- Compact and readable
- Includes both return and direct-output styles
- Optional unit conversion to support `"F"` input

---

## 🧾 Summary

You’ve applied ternary logic in a real-world situation:
- ✔️ Value comparisons
- ✔️ Chained conditions
- ✔️ Input flexibility with unit conversion

