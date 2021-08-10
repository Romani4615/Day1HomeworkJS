// EXERCISE 1

/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

Input: num1 = "11", num2 = "123"
Output: "134"

Input: num1 = "456", num2 = "77"
Output: "533"

Input: num1 = "0", num2 = "0"
Output: "0"
*/
 
let nonNeg = (num1, num2) => {
    const sums = parseFloat(num1) + parseFloat(num2);
    console.log(sums);
};
nonNeg('11', '123')
nonNeg('456', '77')
nonNeg('0', '0')



// EXERCISE 2

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true
Explanation: From left to right, it reads 121. From right to left, it becomes 121. Therefore it is a palindrome.


Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
let palindrome = x => {
    let z = x + ''
    let y = Array.from(z)
    parseFloat(y)
        if(y[0] == y[y.length-1]) {
        console.log("This is a Palindrome");
        return true;
        }
        else {
        console.log('Not a Palindrome');
        return false;
        }
};
palindrome(121)
palindrome(10)
palindrome(-121)