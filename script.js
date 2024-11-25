function calculateFactorial(n) {
    if (n < 0) {
        return "Invalid input. Please enter a non-negative integer.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


console.log(calculateFactorial(5)); 


function isPrime(num) {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}


console.log(isPrime(7));  
console.log(isPrime(10)); 
console.log(isPrime(1));  

function sumEvenNumbers(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i; 
        }
    }

    return sum;
}


console.log(sumEvenNumbers(1, 10)); 
console.log(sumEvenNumbers(4, 8));  

function removeSelected() {
    var R = document.getElementById("colorSelect"); 
    R.remove(R.selectedIndex); 
}

function changeColor() {
    
    const selectedColor = document.getElementById('colorSelected').value;
    
    const text = document.getElementById('text');
    
    text.style.color = selectedColor;
}
function getNames() {
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;

   
    document.getElementById("FullName").innerHTML =
        "First Name: " + firstName + "<br>Last Name: " + lastName;
}

function displayRandomImage() {
    
    const images = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: 240,
            height: 160
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: 320,
            height: 195
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: 500,
            height: 343
        }
    ];

    
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.getElementById("randomImage");
    imgElement.src = images[randomIndex].src;
    imgElement.width = images[randomIndex].width;
    imgElement.height = images[randomIndex].height;
}