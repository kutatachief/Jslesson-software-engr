
//Assignment on age: should console log when, 
//Child, teenager and adult is between the age of 0 - 12, 12 - 18 and 18 above

function checkAge(age) {
    switch (true) {
        case age < 12 && age >= 1:
            console.log("You are a child.");
            break;
        case age >= 12 && age <= 18:
            console.log("You are a teenager.");
            break;
        case age > 18:
            console.log("You are an adult.");
            break;
        default:
            console.log("Invalid age.");
    }
}

// Test the function
checkAge(8);  // Output: You are a child.
checkAge(15); // Output: You are a teenager.
checkAge(20); // Output: You are an adult.
checkAge(0); // Output: Invalid age.
