/****************************
  Treehouse Project 3
  FSJS - Interactive Form 
****************************/

// Variables 
const nameInput = document.querySelector('#name');
const email = document.querySelector('#mail');
const titleMenu = document.querySelector('#title');
const hiddenRole = document.querySelector('#other');
const designMenu = document.querySelector('#design');
const colorOptions = document.querySelector('#color');

const colorOptionsDiv = document.querySelector('#colors-js-puns');
const registerActivities = document.querySelector('.activities');
const creditCardDiv = document.querySelector('#credit-card');
const paymentMethod = document.querySelector('#payment');

let paymentOption = paymentMethod.options[paymentMethod.selectedIndex].value;
const ccInput = document.querySelector('#cc-num');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');

const payPalText = creditCardDiv.nextElementSibling;
const bitcoinText = payPalText.nextElementSibling;
const registerButton = document.querySelector('button');

// Checkbox variables 
let mainConf = document.getElementsByTagName('input')[name="all"];
let jsFrameworks = document.getElementsByTagName('input')[name="js-frameworks"]; 

let jsLibs = document.getElementsByTagName('input')[name="js-libs"];
let expressWorkshop = document.getElementsByTagName('input')[name="express"];

let nodejs = document.getElementsByTagName('input')[name="node"];
let buildTools = document.getElementsByTagName('input')[name="build-tools"];
let npm = document.getElementsByTagName('input')[name="npm"];
    


// Puts focus on Name Field by default
nameInput.focus();

// Hide 'Other' role input
hiddenRole.style.display = 'none';

// Hide color options 
colorOptionsDiv.style.display = 'none';

// Disable select payment method option
paymentMethod.getElementsByTagName('option')[1].selected = true;
paymentMethod.getElementsByTagName('option')[0].setAttribute('disabled', 'true');

// Hide Paypal & Bitcoin text
payPalText.style.display = 'none';
bitcoinText.style.display = 'none';



// On Menu Change Show hiddenRole option
titleMenu.addEventListener('change', () => { 
  if (titleMenu.lastElementChild.selected) {
      hiddenRole.style.display = 'block';
  } else {
      hiddenRole.style.display = 'none';
  }     
});



// Show Correct Options Based On Theme Choice
designMenu.addEventListener('change', () => {
    let themeOption = designMenu.options[designMenu.selectedIndex].value;
    
    if (themeOption === 'js puns') {
        
        colorOptionsDiv.style.display = 'block';
        colorOptions.selectedIndex = 0;
        
        colorOptions.options[0].style.display = 'block';
        colorOptions.options[1].style.display = 'block';
        colorOptions.options[2].style.display = 'block';
        
        colorOptions.options[3].style.display = 'none';
        colorOptions.options[4].style.display = 'none';
        colorOptions.options[5].style.display = 'none';
        
    } else if (themeOption === 'heart js') {
        
        colorOptionsDiv.style.display = 'block';
        colorOptions.selectedIndex = 3;
        
        colorOptions.options[0].style.display = 'none';
        colorOptions.options[1].style.display = 'none';
        colorOptions.options[2].style.display = 'none';
        
        colorOptions.options[3].style.display = 'block';
        colorOptions.options[4].style.display = 'block';
        colorOptions.options[5].style.display = 'block';
    }
});


// Checks For Conflicts With Registered Activities
registerActivities.addEventListener('change', () => {

    let cost = 0;
    let totalCostDiv = document.createElement('div');
    totalCostDiv.setAttribute('id', 'totalcost');
    registerActivities.appendChild(totalCostDiv);

    // Cost for activities 
        if (mainConf.checked === true) {
            cost += 200;
        }
        if (buildTools.checked === true) {
            cost += 100;
        }
        if (npm.checked === true) {
            cost += 100;
        }

    // Check for timing conflicts JS Frameworks & Express
        if (jsFrameworks.checked === true) {
            cost += 100;
            expressWorkshop.setAttribute('disabled', true);
            
        } else {
            expressWorkshop.removeAttribute('disabled');   
        }
        
        if (expressWorkshop.checked === true) {
            cost += 100;
            jsFrameworks.setAttribute('disabled', true);
            
        } else {
            jsFrameworks.removeAttribute('disabled', true);
        }
    
    // Check for timing conflicts with JS Lib & Node.js
        if (jsLibs.checked === true) {
            cost += 100;
            nodejs.setAttribute('disabled', true);
            
        } else {
            nodejs.removeAttribute('disabled');   
        }
        
        if (nodejs.checked === true) {
            cost += 100;
            jsLibs.setAttribute('disabled', true);
            
        } else {
            jsLibs.removeAttribute('disabled', true);
        }
        
        document.getElementById('totalcost').innerHTML = `Your total is: $${cost}`;
});

// This Event Listener Determines Which Options To Display
paymentMethod.addEventListener('change', () => {
    let paymentOption = paymentMethod.options[paymentMethod.selectedIndex].value;
    
    if (paymentOption === 'credit card') {
        creditCardDiv.style.display = 'block';
        bitcoinText.style.display = 'none';
        payPalText.style.display = 'none'; 
    }
    
    if (paymentOption === 'paypal') {
        creditCardDiv.style.display = 'none';
        bitcoinText.style.display = 'none';
        payPalText.style.display = 'block';     
    } 
    
    if (paymentOption === 'bitcoin') {
        bitcoinText.style.display = 'block';
        payPalText.style.display = 'none';
        creditCardDiv.style.display = 'none';
    }
    
});

// Form Validation Error Messages
// Name Error Message
const nameErrorMsg = () => {
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'namediv')
    let errorP = document.createElement('p');
    errorP.setAttribute('id', 'name-error')
    errorP.style.color = 'crimson';
    errorDiv.appendChild(errorP);
    nameInput.parentNode.insertBefore(errorDiv, nameInput);
    document.getElementById('name-error').innerHTML = `Name must be entered`;
};

 // CVV Message
 const cvvMsg = () => {
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id','cvverrormsg')
    let errorP = document.createElement('p');
    errorP.setAttribute('id', 'cvverror')
    errorP.style.color = 'crimson';
    errorDiv.appendChild(errorP);
    creditCardDiv.insertBefore(errorDiv, creditCardDiv.firstElementChild);
    document.getElementById('cvverror').innerHTML = `CVV must be 3 digits`;
};

// Zip Message 
const zipCodeMsg = () => {
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id','ziperrormsg')
    let errorP = document.createElement('p');
    errorP.setAttribute('id', 'ziperror')
    errorP.style.color = 'crimson';
    errorDiv.appendChild(errorP);
    creditCardDiv.insertBefore(errorDiv, creditCardDiv.firstElementChild);
    document.getElementById('ziperror').innerHTML = `Zip code must be at 5 digits`;
};

// Card Number Error Messsage 
const cardNumberMsg = () => {
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'cardNumError')
    let errorP = document.createElement('p');
    errorP.setAttribute('id', 'number-error')
    errorP.style.color = 'crimson';
    errorDiv.appendChild(errorP);
    creditCardDiv.insertBefore(errorDiv, creditCardDiv.firstElementChild);
    document.getElementById('number-error').innerHTML = `Enter a valid card number (13 - 16 digits)`;
};

// Email Error Message
const emailErrorMsg = () => {
    let errorDiv = document.createElement('div');
    let errorP = document.createElement('p');
    errorP.setAttribute('id', 'email-error')
    errorP.style.color = 'crimson';
    errorDiv.appendChild(errorP);
    nameInput.parentNode.insertBefore(errorDiv, email);
    document.getElementById('email-error').innerHTML = `Enter a valid email address`;
};

// Validate Name Input
const validateName = () => {
    if (nameInput.value === '') {
        nameErrorMsg();
        return true;
    } else {
        return false;
    };
};

// Validate E-mail input
const validateEmail = () => {
    let atpos = email.value.indexOf("@");
    let dotpos = email.value.indexOf(".");

    if (email.value === '') {
        emailErrorMsg();
        return true;
    } else if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.value.length) {
        emailErrorMsg();
        return true;
    } else {
        return false;
    };
}; 


// Validate at least 1 activity has been checked
const checkActs = () => {
    // Sets default value to false in order to check if error needs to be appended
    let isChecked = false;
    let checkboxes = registerActivities.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked  == true) {
            document.getElementById('error').style.display = 'none';
            isChecked = true;
            return;
        }; 
        
    };
        if (document.getElementById('errordiv') != null ) {
            return false;
        } else {
            // create error message if no activity is checked
            let errorMsg = document.createElement('div');
            errorMsg.setAttribute('id', 'errordiv');
            let errorText = document.createElement('p');
            errorText.setAttribute('id', 'error');
            errorText.style.color = 'crimson';
            errorMsg.appendChild(errorText);
            registerActivities.insertBefore(errorMsg, registerActivities.firstElementChild);
            document.getElementById('error').innerHTML = `Please select at least one activity`;
        };
};

// Validate Credit Card
const validateCCForm = () => {
    // Check if the length of the card number is correct
    let cardNumber = ccInput.value.length;
    if (paymentOption == 'credit card') {
        if (cardNumber >= 13 && cardNumber <= 16)
            document.getElementById('cardNumError').style.display = 'none';
            return true;

    }  if (document.getElementById('number-error') != null){ 
        // do nothing
    } else {
        cardNumberMsg();
        return false;
    };
};

// Validate Zip Code Input
const validateZip = () => {
    let zipCode = zipInput.value.length;
    if (paymentOption == 'credit card') {
        if (zipCode != 5) {
            document.getElementById('ziperrormsg').style.display = 'none';
            return true;
        }
    }  if (document.getElementById('ziperror') != null) {
        // do nothing
    } else {
        zipCodeMsg();
        return false;
    }
 };

 // Validate CVV Input
const validateCvv = () => {
    let cvv = cvvInput.value.length;
    if (paymentOption == 'credit card') {
        if (cvv != 3) {
            document.getElementById('cvverror').style.innerHTML = '';
            return true;
        }
    }  if (document.getElementById('cvverrormsg') != null) {
        // do nothing
    } else {
        cvvMsg();
        return false;
    }
 };


// On button click, prevent submission if conditions do not pass
registerButton.addEventListener('click', (e) => {
   if ( validateName() === true ) {
       e.preventDefault();
   }; 

   if (validateEmail() === true ) {
       e.preventDefault();
   };

   if (checkActs() === false ) {
       e.preventDefault();
   };
       
   if (validateCCForm() === false) {
       e.preventDefault();
   };

   if (validateZip() === false) {
       e.preventDefault();
   };

   if (validateCvv() === false) {
       e.preventDefault();
   };
});
