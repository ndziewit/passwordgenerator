# 03 JavaScript: Password Generator

This application was created as a way for an end user to generate a random, secure password based on the criteria that they select.

## Content

Upon opening the page, you are presented with a text box and a button. When the button is pressed, a modal pops up onto the screen with options for your created password. The user then can select the length of the password and other parameters for the password to contain such as numbers, special symbols, and uppper or lowercase letters. Once the user selects the paramaters and the Generate Password button is pressed, the password prints out on the main page inside of the dashed box.
If the password length is less than 8 characters or more than 128 characters, an alert will prompt the user to re-enter a valid integer.
Once the password is generated and printed, the user has the option to close the modal by either clicking the "X" or clicking outside of the box anywhere on the document.

*The modal element html and JS was found on the internet but was edited to include the Length, Lowercase, Uppercase, Numeric, and Symbols form elements.*

##  The Script

Most of the heavy lifting is done inside of the modal itself. Some of the Javascript was attached to the html file to make it a little more DRY. When a checkbox is checked, the html triggers a function related to that checkbox. Each function works exactly the same except the variable in each function is different pertaining to each checkbox.
For example, when a box is checked, a function detects the click and checks the state of the box after the click. If the box is checked, a string related to the checkbox is added to the "chars" variable. If the box is unchecked, the string added to the "chars" variable is removed.

The Generate function on line 70 in the .js file then takes the string printed to the "chars" variable and is run through a random "for" loop to generate a password as long as the user specified in the modal. A password will not print if the user selects a value less than 8 or more than 128.

## Possible Improvements

I would have liked to include all of the Javascript within the .js file but it was more DRY to do it this way. Some issues also arose when I went down that path attempting to use the following code for each checkbox:

var upper = document.getElementById('upper');
lower.addEventListener("checked",function changeUpper(){
    upper.disabled = "true";
},false);

The original homework asked for prompts instead of a modal but that UX seems a little outdated and linear. This way a user can make a decision, see it in real time, and when they are happy with their option they can generate an immediate result rather than going through the whole process.
Also I wanted to challenge myself a little bit. :)