var questionOfProgram = document.getElementsByClassName("Display-Question")[0]; //to display the question
var TextBox = document.getElementsByClassName("content-of-question-2__textbox")[0];
var lableForTextBox = document.getElementsByClassName("content_text")[0];
var runProgram = document.getElementsByClassName("executing-Button")[0];
var formInput = document.getElementsByClassName("input")[0];

function numericValidation() {
	if (TextBox.validity.patternMismatch) {
		TextBox.setCustomValidity("please enter only numbers!");
		TextBox.style.borderColor = "#fb0505";
	} else {
		TextBox.setCustomValidity("");
		TextBox.style.borderColor = "#49e50a";
	}
}

function AlphabeticValidation() {
	if (TextBox.validity.patternMismatch) {
		TextBox.setCustomValidity("please enter only Alphabets!");
		TextBox.style.borderColor = "#fb0505";
	} else {
		TextBox.setCustomValidity("");
		TextBox.style.borderColor = "#49e50a";
	}
}

function dateValidation() {
	if (TextBox.validity.patternMismatch) {
		TextBox.setCustomValidity("please enter only Alphabets!");
		TextBox.style.borderColor = "#fb0505";
	} else {
		TextBox.setCustomValidity("");
		TextBox.style.borderColor = "#49e50a";
	}
}

/* 2.Write a JavaScript program which returns a subset of a string?
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"].*/
document.getElementsByClassName("question_2")[0].onclick = changeQuestion2;

function changeQuestion2() {
	questionOfProgram.innerHTML = "2.Write a JavaScript program which returns a subset of a string";
	runProgram.onclick = stringSubset;
	lableForTextBox.innerText = "Enter a word (Only letters):";
	TextBox.setAttribute("type", "text");
	TextBox.setAttribute("pattern", "[a-zA-Z\s ].{0,}");
	formInput.reset();
	TextBox.addEventListener("input", AlphabeticValidation);
	document.getElementById('id01').style.display = 'block';

}

function stringSubset() {
	var string = TextBox.value.trim();
	if (string != '') {
		var k = 0,
			output = [];
		string = string.split(" ").join("");
		for (var i = 0; i <= string.length; i++) {
			for (var j = i + 1; j <= string.length; j++) {
				var result = string.substring(i, j); //you can use slice also
				output[k] = result;
				k++;
			}
		}
		output.toString();
		alert("The substring of the input is : " + output);

	} else {
		TextBox.setCustomValidity("please enter a valid input!");

	}
}

/*3. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result?
Sample numbers : -5, -2, -6, 0, -1 
Output : 0  */
document.getElementsByClassName("question_3")[0].onclick = changeQuestion3;

function changeQuestion3() {
	questionOfProgram.innerHTML = "3. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result";
	runProgram.onclick = largestNumber;
	lableForTextBox.innerText = "Enter a set of numbers with comma separation :";
	TextBox.setAttribute("type", "text");
	TextBox.setAttribute("pattern", "[0-9, ./-].{0,}");
	formInput.reset();
	TextBox.addEventListener("input", numericValidation);
	document.getElementById('id01').style.display = 'block';
}

function largestNumber() {
	var fraction = /[\/]/;
	var numberBox = TextBox.value.trim().split(",");
	for (var i = 0; i < numberBox.length; i++) {
		if (numberBox[i] === '' || isNaN(parseInt(numberBox[i]))) {
			TextBox.setCustomValidity("please enter a valid input! (only numbers) ");

		} else if (fraction.test(numberBox[i]) === true) {
			TextBox.setCustomValidity("please don't give fractions as input");

		}
	}
	alert("Largest of those is  " + Math.max(...numberBox));
}

// 4.Write a JavaScript program to sum the multiples of 3 and 5 under 1000?

document.getElementsByClassName("question_4")[0].onclick = changeQuestion4;

function changeQuestion4() {
	questionOfProgram.innerHTML = "4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000";
	runProgram.onclick = multiplesOf3_5;
	lableForTextBox.innerText = "Enter a limit (Number) :";
	TextBox.setAttribute("type", "number");
	TextBox.setAttribute("pattern", "[0-9, .-].{0,}");
	TextBox.addEventListener("input", numericValidation);
	formInput.reset();
	document.getElementById('id01').style.display = 'block';
}

function multiplesOf3_5() {
	var uptoLimit = parseInt(TextBox.value);
	var minus = /[-]/;
	if (isNaN(uptoLimit)) {
		TextBox.setCustomValidity("please enter a valid input! (only numbers) ");

	} else if (0 <= uptoLimit && uptoLimit < 15) {
		TextBox.setCustomValidity("The smallest value of multiples of 3 & 5 is 15. so, please enter a number greater than 15");

	} else if (minus.test(uptoLimit)) {
		TextBox.setCustomValidity("Multiples of 3 & 5 can't be a negative number. so, please enter a positive number");

	} else if (typeof (uptoLimit) == "number") {
		let sum = 0;

		function multiples(number) {
			for (let i = 0; i <= number; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					sum += i;
				}
			}
			return sum;
		}
	} else {
		TextBox.setCustomValidity("invalid input");

	}
	alert("The sum of multiples of 3 & 5 upto " + uptoLimit + " are : " + multiples(uptoLimit));

}

/*5.Write a JavaScript program to check if a string starts with 'Java' and false otherwise*/

document.getElementsByClassName("question_5")[0].onclick = changeQuestion5;

function changeQuestion5() {
	questionOfProgram.innerHTML = "5. Write a JavaScript\
	program to check if a string starts with 'Java' and false otherwise";
	runProgram.onclick = startWithJava;
	lableForTextBox.innerText = "Enter a word :";
	TextBox.setAttribute("type", "text");
	TextBox.setAttribute("pattern", "[a-zA-Z ].{0,}");
	TextBox.addEventListener("input", AlphabeticValidation);
	document.getElementById('id01').style.display = 'block';
}

function startWithJava() {
	var Java = TextBox.value.trim();
	var checkPoint = parseInt(Java);
	if (isNaN(checkPoint)) {
		if (typeof (Java) === 'string') {
			if (Java.startsWith("java") || Java.startsWith("JAVA") || Java.startsWith("Java")) {
				alert("true");
			} else {
				alert("false");
			}
		} else {
			TextBox.setCustomValidity("please enter a valid input (string)");
		}
	} else {
		TextBox.setCustomValidity("please enter a valid input (string)");
	}

}

/* 6.Write a JavaScript program to get the integers in range (x, y)?
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8].
*/

document.getElementsByClassName("question_6")[0].onclick = changeQuestion6;

function changeQuestion6() {
	questionOfProgram.innerHTML = "6.  Write a JavaScript program to get the integers in range (x, y)";
	runProgram.onclick = rangeOfNumbers;
	//lableForTextBox.innerText = "Enter a range of numbers with comma separation {ex: x,y } :";
	//TextBox.setAttribute("type", "text");
	//TextBox.setAttribute("pattern", "[0-9, .-].{0,}");
	//TextBox.addEventListener("input", numericValidation);
	document.getElementById('id01').style.display = 'block';
	/*
	
	document.getElementsByClassName("teal")[0].classList.add("no-display");
	document.getElementsByClassName("slidecontainer")[0].classList.remove("no-display");    */
}


function rangeOfNumbers() {
	var rangeValue = document.getElementById("myRange").value,
		k = 0,
		result = [];
	for (var i = 1; i <= rangeValue; i++) {
		result[i - 1] = i;
	}
	result.toString();
	document.getElementsByClassName("results")[0].innerText = result;
}
/*function rangeOfNumbers() {
	var number = TextBox.value.trim().split(",");
	var number1 = parseInt(number[0], 10),
		number2 = parseInt(number[1], 10),
		output = [],
		k = 0;
	if (number1 >= number2) {
		TextBox.setCustomValidity("The first number should be less than second number");
	} else if (number1 === number2 - 1) {
		TextBox.setCustomValidity("There is no integer between those numbers");
	} else {
		for (i = 1; i < (number2 - number1); i++) {
			if (Number.isInteger(number1 + i)) {
				var result = number1 + i;    //you can use slice also
				output[k] = result;
				k++;
			}
		}
		output.toString();
		alert("Numbers between those range : " + output);
	}
	
}*/


// 7. Write a JavaScript program to get a list of elements that exist in both arrays. 

document.getElementsByClassName("question_7")[0].onclick = changeQuestion7;

function changeQuestion7() {
	questionOfProgram.innerHTML = "7. Write a JavaScript program to get a list of elements that exist in both arrays.";
	runProgram.onclick = findCommonElements;
	lableForTextBox.innerText = "Enter a set of	elements with comma separation {ex: a,b,c } :";
	TextBox.setAttribute("type", "text");
	document.getElementsByClassName("content-of-question-7")[0].classList.remove("no-display");
	document.getElementById('id01').style.display = 'block';
}

function findCommonElements() {
	var arr1 = TextBox.value.trim().split(",");
	var arr2 = document.getElementsByClassName("content-of-question-7__textbox")[0].value.trim().split(",");

	function sameElements(arr1, arr2) {
		var resArr = [];
		for (var i = 0; i <= arr1.length - 1; i++) {

			for (var j = 0; j <= arr2.length - 1; j++) {
				if (arr1[j] === arr2[i]) {
					resArr.push(arr1[i]);
				}
			}
		}
		resArr.toString();
		return resArr;
	}
	document.getElementsByClassName("content-of-question-7")[0].classList.add("no-display");
	if (sameElements(arr1, arr2) == 0) {
		alert("There are no common elements");
	} else {
		alert("The common Elements in both the inputs are :" + sameElements(arr1, arr2));
	}

}

/* 8.Write a JavaScript program to calculate age?
Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53*/
document.getElementsByClassName("question_8")[0].onclick = changeQuestion8;

function changeQuestion8() {
	questionOfProgram.innerHTML = "8. Write a \
	JavaScript program to calculate age";
	runProgram.onclick = calculate_age;
	lableForTextBox.innerText = "Enter your Date of Birth";
	TextBox.setAttribute("type", "date");
	TextBox.addEventListener("input", dateValidation);
	formInput.reset();
	document.getElementById('id01').style.display = 'block';
}

function calculate_age() {
	Date.prototype.getDoY = function () {
		var onejan = new Date(this.getFullYear(), 0, 1);
		return Math.floor(((this - onejan) / 86400000) + 1);
	}

	function getAge(birthDate) {
		function isLeap(year) {
			return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
		}
		var now = new Date(),
			age = now.getFullYear() - birthDate.getFullYear(),
			doyNow = now.getDoY(),
			doyBirth = birthDate.getDoY();

		// normalize day-of-year in leap years
		if (isLeap(now.getFullYear()) && doyNow > 58 && doyBirth > 59)
			doyNow--;

		if (isLeap(birthDate.getFullYear()) && doyNow > 58 && doyBirth > 59)
			doyBirth--;

		if (doyNow <= doyBirth) {
			age = age - 1;
			// birthday not yet passed this year, so -1
		}
		return age;
	}
	var input = TextBox.value;
	var myBirth = new Date(input);
	var now = new Date();


	if (isNaN(getAge(myBirth))) {
		TextBox.setCustomValidity("please enter a valid date!");
	} else if (now < myBirth) {
		TextBox.setCustomValidity("don't enter any future date!");
	} else if (now = myBirth) {
		alert(" Happy Birthday !!!!");
	} else {
		alert(getAge(myBirth));
	}

}

/*9. Write a JavaScript function that accepts a string as a parameter and counts
 the number of vowels within the string?
Example string : 'The quick brown fox' 
Expected Output : 5 */

document.getElementsByClassName("question_9")[0].onclick = changeQuestion9;

function changeQuestion9() {
	questionOfProgram.innerHTML = "9.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string";
	runProgram.onclick = countVowels;
	lableForTextBox.innerText = "Enter a word / sentence : ";
	TextBox.setAttribute("type", "text");
	formInput.reset();
	TextBox.addEventListener("input", AlphabeticValidation);
	document.getElementById('id01').style.display = 'block';
}

function countVowels() {
	var string = TextBox.value.trim();
	var pattern = /^[a-zA-Z]*$/;
	if (pattern.test(string) === true && string !== '') {
		function vowelLength(subject) {
			return subject.match(/[aeiou]/gi).length;
		}
		alert(vowelLength(string));
	} else {
		alert(" Please enter a valid input (only letters)");
	}

}

//10. Write a JavaScript function to  get the number of occurrences of each letter in specified string?
document.getElementsByClassName("question_10")[0].onclick = changeQuestion10;

function changeQuestion10() {
	questionOfProgram.innerHTML = "10. Write a JavaScript function to  get the number of occurrences of each letter in specified string";
	runProgram.onclick = occurencesOfEachLetters;
	lableForTextBox.innerText = "Enter a word / sentence : ";
	TextBox.setAttribute("type", "text");
	TextBox.setAttribute("pattern", "[a-zA-Z ].{0,}");
	formInput.reset();
	TextBox.addEventListener("input", AlphabeticValidation);
	document.getElementById('id01').style.display = 'block';
}

function occurencesOfEachLetters() {
	var string = TextBox.value.trim();

	function count(string) {
		var string1 = string.split("").sort().join("");
		var counter = 1;
		for (let i = 0; i < string.length; i++) {
			if (string1[i] == string1[i + 1]) {
				counter++;
			} else {
				document.write(string1[i] + " " + counter + "<br>");
				counter = 1;
			}
		}
	}
} //incomplete

//11.Write a JavaScript program to convert the letters of a given string in alphabetical order?