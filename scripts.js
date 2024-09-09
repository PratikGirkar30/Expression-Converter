// Helper function to get precedence of operators
function precedence(op) {
    if (op === '+' || op === '-') {
        return 1;
    }
    if (op === '*' || op === '/') {
        return 2;
    }
    if (op === '^') {
        return 3;
    }
    return 0;
}


function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
}

// Function to convert infix to postfix
function infixToPostfix(infix) {
    let stack = [];
    let result = "";
    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];

        if (char === ' ') {
            continue; // Skip whitespace
        }

        // If the character is an operand, add it to the result
        if (!isOperator(char) && char !== '(' && char !== ')') {
            result += char;
        }
        // If the character is '(', push it to the stack
        else if (char === '(') {
            stack.push(char);
        }
        // If the character is ')', pop and output from the stack
        // until an '(' is encountered
        else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop(); // Remove the '(' from stack
        }
        // An operator is encountered
        else {
            while (stack.length && precedence(stack[stack.length - 1]) >= precedence(char)) {
                result += stack.pop();
            }
            stack.push(char);
        }
    }

    // Pop all the remaining operators from the stack
    while (stack.length) {
        result += stack.pop();
    }

    return result;
}

function convertInfixToPostfix() {
    let infix = document.getElementById("infixInput").value;
    let postfix = infixToPostfix(infix);
    document.getElementById("postfix").textContent = postfix;
}

// Function to convert infix to prefix
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseBrackets(expression) {
    let result = "";
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            result += ')';
        } else if (expression[i] === ')') {
            result += '(';
        } else {
            result += expression[i];
        }
    }
    return result;
}

function infixToPrefix(infix) {
    // Step 1: Reverse the infix expression
    let reversedInfix = reverseString(infix);

    // Step 2: Replace '(' with ')' and vice versa
    reversedInfix = reverseBrackets(reversedInfix);

    // Step 3: Get postfix of the modified expression
    let postfix = infixToPostfix(reversedInfix);

    // Step 4: Reverse the postfix to get prefix
    let prefix = reverseString(postfix);

    return prefix;
}

function convertInfixToPrefix() {
    let infix = document.getElementById("infixInput1").value;
    let prefix = infixToPrefix(infix);
    document.getElementById("prefix").textContent = prefix;
}

// Function to convert postfix to prefix
function convertPostfixToPrefix() {
    let postfix = document.getElementById("postfixInput1").value;
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        if (!isOperator(char)) {
            // If it's an operand, push it to the stack
            stack.push(char);
        } else {
            // If it's an operator, pop two operands from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Create the new prefix expression and push it to the stack
            let prefix = char + operand2 + operand1;
            stack.push(prefix);
        }
    }

    // The final element in the stack is the prefix expression
    let prefixExpression = stack.pop();
    document.getElementById("prefix1").textContent = prefixExpression;
}

// Function to convert postfix to infix
function convertPostfixToInfix() {
    let postfix = document.getElementById("postfixInput").value;
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        if (!isOperator(char)) {
            // If it's an operand, push it to the stack
            stack.push(char);
        } else {
            // If it's an operator, pop two operands from the stack
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            // Combine them into a new infix string with parentheses
            let infix = "(" + operand1 + char + operand2 + ")";

            // Push the resulting infix expression back to the stack
            stack.push(infix);
        }
    }

    // The final element in the stack is the infix expression
    let infixExpression = stack.pop();
    document.getElementById("infix").textContent = infixExpression;
}

// Function to convert prefix to infix
function convertPrefixToInfix() {
    let prefix = document.getElementById("prefixInput1").value;
    let stack = [];

    // Traverse the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];

        if (!isOperator(char)) {
            // If the character is an operand, push it onto the stack
            stack.push(char);
        } else {
            // If the character is an operator, pop two operands from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Combine them into a new string in infix format
            let infix = "(" + operand1 + char + operand2 + ")";

            // Push the resulting string back onto the stack
            stack.push(infix);
        }
    }

    // The final element in the stack is the infix expression
    let infixExpression = stack.pop();
    document.getElementById("infix1").textContent = infixExpression;
}

// Function to convert prefix to postfix
function convertPrefixToPostfix() {
    let prefix = document.getElementById("prefixInput").value;
    let stack = [];

    // Traverse the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];

        if (!isOperator(char)) {
            // If the character is an operand, push it to the stack
            stack.push(char);
        } else {
            // If the character is an operator, pop two operands from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Form a new postfix expression and push it to the stack
            let postfix = operand1 + operand2 + char;
            stack.push(postfix);
        }
    }

    // The final element in the stack is the postfix expression
    let postfixExpression = stack.pop();
    document.getElementById("postfix1").textContent = postfixExpression;
}


//tab

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();