/* 2.Write a JavaScript program which returns a subset of a string?
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"].*/
document.getElementsByClassName("question_2")[0].onclick = changeQuestion2;

function changeQuestion2() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "2.Write a \
	JavaScript program which returns a subset of a string";
	document.getElementsByClassName("executing-Button")[0].onclick = stringSubset;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a word (Only letters):";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
	document.getElementsByClassName("input")[0].reset();
}

function stringSubset() {
	var string = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim();
	var pattern = /^[a-zA-Z]*$/;
	if (string != '' && pattern.test(string) === true) {
		var k = 0,
			output = [],
			x = string.length;
		if (typeof (string) === 'string') {
			for (var i = 0; i <= string.length; i++) {
				for (var j = i + 1; j <= x; j++) {
					var result = string.substring(i, j); //you can use slice also
					output[k] = result;
					k++;
				}
			}
			output.toString();
			alert("The substring of the input is : " + output);
		} else {
			alert("please enter a valid input (string)");
		}
	} else {
		alert("please enter a valid input");
	}
}

/*3. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result?
Sample numbers : -5, -2, -6, 0, -1 
Output : 0  */
document.getElementsByClassName("question_3")[0].onclick = changeQuestion3;

function changeQuestion3() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "3. Write a JavaScript \
	conditional statement to find the largest of five numbers. Display an alert box to show the result";
	document.getElementsByClassName("executing-Button")[0].onclick = largestNumber;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a set of \
	numbers with comma separation :";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
	document.getElementsByClassName("input")[0].reset();
}

function largestNumber() {
	var pattern = /^[0-9,./ -]*$/;
	var fraction = /[\/]/;
	var numberBox = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim().split(",");
	for (var i = 0; i < numberBox.length; i++) {
		if (numberBox[i] === '' || pattern.test(numberBox[i]) === false || isNaN(parseInt(numberBox[i])) === true) {
			alert("please enter a valid input (only numbers) ");
			return 0;
		} else if (fraction.test(numberBox[i]) === true) {
			alert("please don't give fractions as input");
			return 0;
		}
	}
	alert("Largest of those is  " + Math.max(...numberBox));
	document.getElementsByClassName("input")[0].reset();
}

// 4.Write a JavaScript program to sum the multiples of 3 and 5 under 1000?

document.getElementsByClassName("question_4")[0].onclick = changeQuestion4;

function changeQuestion4() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "4. Write a \
	JavaScript program to sum the multiples of 3 and 5 under 1000";
	document.getElementsByClassName("executing-Button")[0].onclick = multiplesOf3_5;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a limit (Number) :";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "number");
}

function multiplesOf3_5() {
	var uptoLimit = parseInt(document.getElementsByClassName("content-of-question-2__textbox")[0].value);
	var minus = /[-]/;
	if (isNaN(uptoLimit)) {
		alert("invalid input");
		return 0;
	} else if (0 <= uptoLimit && uptoLimit < 15) {
		alert("The smallest value of multiples of 3 & 5 is 15. so, please enter a number greater than 15");
		return 0;
	} else if (minus.test(uptoLimit) === true) {
		alert("Multiples of 3 & 5 can't be a negative number. so, please enter a positive number");
		return 0;
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
		alert("invalid input");
		return 0;
	}
	alert("The sum of multiples of 3 & 5 upto " + uptoLimit + " are : " + multiples(uptoLimit));
	document.getElementsByClassName("input")[0].reset();
}

/*5.Write a JavaScript program to check if a string starts with 'Java' and false otherwise*/

document.getElementsByClassName("question_5")[0].onclick = changeQuestion5;

function changeQuestion5() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "5. Write a JavaScript\
	program to check if a string starts with 'Java' and false otherwise";
	document.getElementsByClassName("executing-Button")[0].onclick = startWithJava;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a word :";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
}

function startWithJava() {
	var Java = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim();
	var checkPoint = parseInt(Java);
	if (isNaN(checkPoint)) {
		if (typeof (Java) === 'string') {
			if (Java.startsWith("java") || Java.startsWith("JAVA") || Java.startsWith("Java")) {
				alert("true");
			} else {
				alert("false");
			}
		} else {
			alert("please enter a valid input (string)");
		}
	} else {
		alert("please enter a valid input (string)");
	}
	document.getElementsByClassName("input")[0].reset();
}

/* 6.Write a JavaScript program to get the integers in range (x, y)?
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8].
*/

document.getElementsByClassName("question_6")[0].onclick = changeQuestion6;

function changeQuestion6() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "6.  Write a \
	JavaScript program to get the integers in range (x, y)";
	document.getElementsByClassName("executing-Button")[0].onclick = rangeOfNumbers;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a range of \
	numbers with comma separation {ex: x,y } :";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
}

function rangeOfNumbers() {
	var number = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim().split(",");
	var number1 = parseInt(number[0], 10),
		number2 = parseInt(number[1], 10),
		output = [],
		k = 0;
	if (number1 >= number2) {
		alert("The first number should be less than second number");
	} else if (number1 === number2 - 1) {
		alert("There is no integer between those numbers");
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
	document.getElementsByClassName("input")[0].reset();
}

// 7. Write a JavaScript program to get a list of elements that exist in both arrays. 

document.getElementsByClassName("question_7")[0].onclick = changeQuestion7;

function changeQuestion7() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "7. Write a \
	JavaScript program to get a list of elements that exist in both arrays.";
	document.getElementsByClassName("executing-Button")[0].onclick = findCommonElements;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a set of\
	elements with comma separation {ex: a,b,c } :";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
	document.getElementsByClassName("content-of-question-7")[0].classList.remove("no-display");
}

function findCommonElements() {
	var arr1 = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim().split(",");
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
	document.getElementsByClassName("input")[0].reset();
}

/* 8.Write a JavaScript program to calculate age?
Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53*/
document.getElementsByClassName("question_8")[0].onclick = changeQuestion8;

function changeQuestion8() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "8. Write a \
	JavaScript program to calculate age";
	document.getElementsByClassName("executing-Button")[0].onclick = calculate_age;
	document.getElementsByClassName("content_text")[0].innerText = "Enter your Date of Birth";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "date");
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
	var input = document.getElementsByClassName("content-of-question-2__textbox")[0].value;
	var myBirth = new Date(input);
	var now = new Date();


	if (isNaN(getAge(myBirth))) {
		alert("please enter a valid date ");
	} else if (now < myBirth) {
		alert("don't enter any future date");
	} else if (now = myBirth) {
		alert(" Happy Birthday !!!!");
	} else {
		alert(getAge(myBirth));
	}
	document.getElementsByClassName("input")[0].reset();
}

/*9. Write a JavaScript function that accepts a string as a parameter and counts
 the number of vowels within the string?
Example string : 'The quick brown fox' 
Expected Output : 5 */

document.getElementsByClassName("question_9")[0].onclick = changeQuestion9;

function changeQuestion9() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "9. Write a \
	JavaScript function that accepts a string as a parameter and counts the number of\
	vowels within the string";
	document.getElementsByClassName("executing-Button")[0].onclick = countVowels;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a word / sentence : ";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
	document.getElementsByClassName("input")[0].reset();
}

function countVowels() {
	var string = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim();
	var pattern = /^[a-zA-Z]*$/;
	if (pattern.test(string) === true && string !== '') {
		function vowelLength(subject) {
			return subject.match(/[aeiou]/gi).length;
		}
		alert(vowelLength(string));
	} else {
		alert(" Please enter a valid input (only letters)");
	}
	document.getElementsByClassName("input")[0].reset();
}

//10. Write a JavaScript function to  get the number of occurrences of each letter in specified string?
document.getElementsByClassName("question_10")[0].onclick = changeQuestion10;

function changeQuestion10() {
	document.getElementsByClassName("Display-Question")[0].innerHTML = "10. Write a JavaScript function\
	to  get the number of occurrences of each letter in specified string";
	document.getElementsByClassName("executing-Button")[0].onclick = occurencesOfEachLetters;
	document.getElementsByClassName("content_text")[0].innerText = "Enter a word / sentence : ";
	document.getElementsByClassName("content-of-question-2__textbox")[0].setAttribute("type", "text");
	document.getElementsByClassName("input")[0].reset();
}

function occurencesOfEachLetters() {
	var string = document.getElementsByClassName("content-of-question-2__textbox")[0].value.trim();

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