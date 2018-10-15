$(function () {
	function changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue) {
		$(".Display-Question").text(write_Query);
		$(".content_text").text(write_Lable);
		$(".content-of-question-2__textbox").attr({
			"type"			: type_attribute,
			"pattern"		: validatingPattern,
			"placeholder"	: placeholderValue
		});
		$(".modal").css("display", "block");
		$(".results").css("display", "none");
		$("form").submit(function (event) {
			event.preventDefault();
		});
		$(".content-of-question-2__textbox").val("");
	}

	$(".restructured").click(function () {
		$(".results").css("display", "none");
		$(".content-of-question-2__textbox")[0].setCustomValidity("");
	});
	$(".close,.cancelbtn").click(function () {
		document.getElementById('block').style.display = 'none';
	});

	function numericValidation() {
		if ($(".content-of-question-2__textbox")[0].validity.patternMismatch) {
			$(".content-of-question-2__textbox")[0].setCustomValidity("please enter only numbers!");
			$(".content-of-question-2__textbox")[0].style.borderColor = "#fb0505";
			$(".results").text("please enter only numbers!");
			return false;
		} else {
			$(".content-of-question-2__textbox")[0].setCustomValidity("");
			$(".content-of-question-2__textbox")[0].style.borderColor = "#49e50a";
			return true;
		}
	}

	function alphabeticValidation() {
		if ($(".content-of-question-2__textbox")[0].validity.patternMismatch) {
			$(".content-of-question-2__textbox")[0].setCustomValidity("please enter only Alphabets!");
			$(".content-of-question-2__textbox")[0].style.borderColor = "#fb0505";
			$(".results").text("please enter only Alphabets!");
		} else {
			$(".content-of-question-2__textbox")[0].setCustomValidity("");
			$(".content-of-question-2__textbox")[0].style.borderColor = "#49e50a";

		}
	}


	$(".question_1").click(function () {
		write_Query = "1.Write a JavaScript program to sort a list of elements using Quick sort";
		write_Lable = "Enter a set of numbers with comma separated : ";
		type_attribute = "text";
		validatingPattern = "^[0-9\s,.]+$.{0,}";
		placeholderValue = "Ex : 11,2,31,4,25";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		//$(".content-of-question-2__textbox").on("keyup", numericValidation());
		var validate;
		$(document).on('keydown keyup ',  function (e) {
		if($('#block').is(':visible')) { validate = numericValidation();}});

		$(".executing-Button").click(function () {
			if(validate) {
			function quick_Sort(origArray) {
				if (origArray.length <= 1) {
					return origArray;
				} else {

					var left = [];
					var right = [];
					var newArray = [];
					var pivot = origArray.pop();
					var length = origArray.length;

					for (var i = 0; i < length; i++) {
						if (origArray[i] <= pivot) {
							left.push(origArray[i]);
						} else {
							right.push(origArray[i]);
						}
					}

					return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
				}
			}

			var myArray = $(".content-of-question-2__textbox").val()
			myArray = $.trim(myArray).split(",");

			$(".results").css("display", "block");
			var sortedArray = quick_Sort(myArray);
			$(".results").text("Sorted array: " + sortedArray);
			} 
		});
	});


	$(".question_2").click(function () {
		write_Query = "2.Write a JavaScript program which returns a subset of a string";
		write_Lable = "Enter a word (Only Alphabets):";
		type_attribute = "text";
		validatingPattern = "^[a-zA-Z\s ]+$.{0,}";
		placeholderValue = "Ex : dog "
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		//$(".content-of-question-2__textbox").on("input", alphabeticValidation);
		//$("body").on('keyup', ".content-of-question-2__textbox", alphabeticValidation);  
		$(document).on('keydown keyup ',  function (e) {
		if($('#block').is(':visible')) {alphabeticValidation();}});

		$(".executing-Button").click(function () {
			var string = $(".content-of-question-2__textbox").val();
			string = $.trim(string);
			string = string.split(" ").join("");
			var numberCheck = parseInt(string);
			if (string !== '' && jQuery.type(string) === "string") {
				var k = 0,
					output = [];
				for (var i = 0; i <= string.length; i++) {
					for (var j = i + 1; j <= string.length; j++) {
						var result = string.substring(i, j); //you can use slice also
						output[k] = result;
						k++;
					}
				}
				output.toString();
				$(".results").css("display", "block");
				$(".results").text("The substring of the input is : " + output);

			} else {
				$(".content-of-question-2__textbox")[0].setCustomValidity("please enter a valid input!!!!!!");
			}
		});
	});

	/*3. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result?
Sample numbers : -5, -2, -6, 0, -1 
Output : 0  */

	$(".question_3").click(function () {
		write_Query = "3. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result";
		write_Lable = "Enter a set of numbers with comma separated :";
		type_attribute = "text";
		validatingPattern = "[0-9\s,. ].{0,}";
		placeholderValue = "Ex : 1,2,3,4,5";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		$(".content-of-question-2__textbox").on("input", numericValidation);
		$(".result").on("output", numericValidation);
		$(".executing-Button").click(function () {

			var numberBox = $(".content-of-question-2__textbox").val()
			numberBox = $.trim(numberBox).split(",");
			for (var i = 0; i < numberBox.length; i++) {
				if (numberBox[i] === '' || jQuery.type(numberBox) === false || isNaN(Math.max(...numberBox))) {
					$(".content-of-question-2__textbox")[0].setCustomValidity("please enter a valid input (only numbers) ");
					return 0;
				}
			}
			$(".results").css("display", "block");
			$(".results").text("The Largest of those is : " + Math.max(...numberBox));

		});
	});

	// 4.Write a JavaScript program to sum the multiples of 3 and 5 under 1000?

	$(".question_4").click(function () {
		write_Query = "4.Write a JavaScript program to sum the multiples of 3 and 5 under 1000";
		write_Lable = "Enter a limit (Number) :";
		type_attribute = "number";
		validatingPattern = "[0-9\s,. ].{0,}";
		placeholderValue = "Ex : 1000";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		$(".content-of-question-2__textbox").on("keyup", numericValidation);

		$(".executing-Button").click(function () {
			var uptoLimit = parseInt($(".content-of-question-2__textbox").val());
			var minus = /[-]/;
			if (isNaN(uptoLimit)) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("invalid input");
				return 0;
			} else if (0 <= uptoLimit && uptoLimit < 15) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("The smallest value of multiples of 3 & 5 is 15. so, please enter a number greater than 15");
				return 0;
			} else if (minus.test(uptoLimit) === true) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("Multiples of 3 & 5 can't be a negative number. so, please enter a positive number");
				return 0;
			} else if (jQuery.type(uptoLimit) === "number") {
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
				$(".content-of-question-2__textbox")[0].setCustomValidity("invalid input");
				return 0;
			}
			$(".results").css("display", "block");
			$(".results").text("The sum of multiples of 3 & 5 upto " + uptoLimit + " are : " + multiples(uptoLimit));

		});
	});

	/*5.Write a JavaScript program to check if a string starts with 'Java' and false otherwise*/

	$(".question_5").click(function () {
		write_Query = "5.Write a JavaScript program to check if a string starts with 'Java' and false otherwise";
		write_Lable = "Enter a word / sentence:";
		type_attribute = "text";
		validatingPattern = "[a-zA-Z\s ].{0,}";
		placeholderValue = "Ex : javascript";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		$(".content-of-question-2__textbox").on("keyup", numericValidation);

		$(".executing-Button").click(function () {

			var Java = $(".content-of-question-2__textbox").val();
			Java = Java.replace(/"|'|,|\s/g, "");
			var checkPoint = parseInt(Java);
			if (isNaN(checkPoint)) {
				if (typeof (Java) === 'string') {
					if (Java.toLowerCase().startsWith("java")) {
						$(".results").css("display", "block");
						$(".results").text("This word/sentence is starts with 'java'");
					} else {
						$(".results").css("display", "block");
						$(".results").text("This word/sentence does not starts with 'java'");
					}
				} else {
					$(".content-of-question-2__textbox")[0].setCustomValidity("please enter a valid input (string)");
				}
			} else {
				$(".content-of-question-2__textbox")[0].setCustomValidity("please enter a valid input (string)");
			}
		});
	});
	/*6.Write a JavaScript program to get the integers in range (x, y)?
	Example : range(2, 9)
	Expected Output : [3, 4, 5, 6, 7, 8].	*/
	$(".question_6").click(function () {
		write_Query = "6.  Write a JavaScript program to get the integers in range (x, y)";
		write_Lable = "Enter a range of numbers with comma separated :";
		type_attribute = "text";
		validatingPattern = "[0-9\s,. ].{0,}";
		placeholderValue = "Ex :  x,y ";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		$(".content-of-question-2__textbox").on("keyup", numericValidation);

		$(".executing-Button").click(function () {
			var number = $(".content-of-question-2__textbox").val();
			number = $.trim(number).split(",");
			var number1 = parseInt(number[0], 10),
				number2 = parseInt(number[1], 10),
				output = [],
				k = 0;
			if (number1 >= number2) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("The first number should be less than second number");
			} else if (number1 === number2 - 1) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("There is no integer between those numbers");
			} else {
				for (i = 1; i < (number2 - number1); i++) {
					if (Number.isInteger(number1 + i)) {
						var result = number1 + i; //you can use slice also
						output[k] = result;
						k++;
					}
				}
				output.toString();
				$(".results").css("display", "block");
				$(".results").text("Numbers between those range : " + output);
			}
			
		});
	});

	/* 8.Write a JavaScript program to calculate age?
	Test Data :
	console.log(calculate_age(new Date(1982, 11, 4))); 
	32
	console.log(calculate_age(new Date(1962, 1, 1)));
	53*/
	$(".question_8").click(function() {
		write_Query = " 8. Write a 	JavaScript program to calculate age ";
		write_Lable = "Enter your Date of Birth";
		type_attribute = "date";
		validatingPattern = "[0-9\s,. ].{0,}";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, 'none');
		//$(".content-of-question-2__textbox").on("input", numericValidation);

		$(".executing-Button").click(function() {
			Date.prototype.getDoY = function() {
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
			var input = $(".content-of-question-2__textbox").val();
			var myBirth = new Date(input);
			var now = new Date();


			if (isNaN(getAge(myBirth))) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("please enter a valid date ");
			} else if (now < myBirth) {
				$(".content-of-question-2__textbox")[0].setCustomValidity("don't enter any future date");
			} else {
				$(".results").css("display", "block");
				$(".results").text("Your age is : " + getAge(myBirth));
			}

		});
	});

	/*9. Write a JavaScript function that accepts a string as a parameter and counts
 the number of vowels within the string?
Example string : 'The quick brown fox' 
Expected Output : 5 */

	$(".question_9").click(function () {
		write_Query = " Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string";
		write_Lable = "Enter a word / sentence:";
		type_attribute = "text";
		validatingPattern = "[a-zA-Z\s ].{0,}";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, 'javascript');
		$(".content-of-question-2__textbox").on("input", alphabeticValidation);

		$(".executing-Button").click(function() {
			var string = $(".content-of-question-2__textbox").val();
			string = $.trim(string);

			if (string !== '' && jQuery.type(string) === "string") {
				function vowelLength(subject) {
					return subject.match(/[aeiou]/gi).length;
				}
				$(".results").css("display", "block");
				$(".results").text("The number of vowels in this word/sentence is/are : " + vowelLength(string));
			} else {
				$(".content-of-question-2__textbox")[0].setCustomValidity(" Please enter a valid input (only letters)");
			}
		});
	});
//10. Write a JavaScript function to  get the number of occurrences of each letter in specified string?	
	$(".question_10").click(function() {
		write_Query = "10. Write a JavaScript function to  get the number of occurrences of each letter in specified string";
		write_Lable = "Enter a word / sentence:";
		type_attribute = "text";
		validatingPattern = "[a-zA-Z\s ].{0,}";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, 'javascript');
		$(".content-of-question-2__textbox").on("input", alphabeticValidation);

		$(".executing-Button").click(function () {
			
				var string = $(".content-of-question-2__textbox").val();
				string = $.trim(string);
				var string1 = string.split("").sort().join("");
				var counter = 1;
				for (let i = 0; i < string.length; i++) {
					if (string1[i] == string1[i + 1]) {
						counter++;
					} else {
						$(".results").css("display", "block");
						$(".results").append(string1[i] + " " + counter + "<br>");
						counter = 1;
					}
				}
		});
	});
	
	//11.Write a JavaScript program to convert the letters of a given string in alphabetical order?
	$(".question_11").click(function() {
		write_Query = "11.Write a JavaScript program to convert the letters of a given string in alphabetical order";
		write_Lable = "Enter a word / sentence:";
		type_attribute = "text";
		validatingPattern = "[a-zA-Z\s ].{0,}";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, 'javascript');
		$(".content-of-question-2__textbox").on("input", alphabeticValidation);

		$(".executing-Button").click(function () {
			var string = $(".content-of-question-2__textbox").val();
			string = $.trim(string).toLowerCase();
			 var arr = string.split('');
			 var tmp;
			for(var i = 0; i < arr.length; i++){
				for(var j = i + 1; j < arr.length; j++){
				/* if ASCII code greater then swap the elements position*/
					if(arr[i] > arr[j]){
						tmp 	= arr[i];
						arr[i]  = arr[j];
						arr[j]  = tmp;
					}
				}
			}
			$(".results").css("display", "block");
			$(".results").text("" +arr.join(''));		
		});
	});
	//12.Write a JavaScript program to capitalize the first letter of each word of a given string?
	
	$(".question_12").click(function() {
		write_Query = "12.Write a JavaScript program to capitalize the first letter of each word of a given string";
		write_Lable = "Enter a word / sentence:";
		type_attribute = "text";
		validatingPattern = "[a-zA-Z\s ].{0,}";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, 'the quick brown fox');
		$(".content-of-question-2__textbox").on("input", alphabeticValidation);

		$(".executing-Button").click(function () {
			
			var string = $(".content-of-question-2__textbox").val();
			string = $.trim(string);
			var splitStr = string.toLowerCase().split(' ');
			for (var i = 0; i < splitStr.length; i++) {
				splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
			}	
   			$(".results").css("display", "block");
			$(".results").text("" +splitStr.join(' ')); 		
		});
	});
/*13.write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign?
Sample numbers : 3, -7, 2 
Output : The sign is - */
	
	$(".question_13").click(function() {
		write_Query = "13.write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign";
		write_Lable = "Enter a set of numbers with comma separated :";
		type_attribute = "text";
		validatingPattern = "[0-9\s,. ].{0,}";
		placeholderValue = "Ex : 1,2,3,4,5";
		changeQuestions(write_Query, write_Lable, type_attribute, validatingPattern, placeholderValue);
		$(".content-of-question-2__textbox").on("input", numericValidation);

		$(".executing-Button").click(function () {
			var num = prompt("enter a set of numbers with different sign").split(",");
			var i, j = 0;
			for(i = 0; i < num.length; i++) {
				if(parseInt(num[i]) > 0) {
					j++;
				}
			}
		if(j % 2 === 0 || j === 0) {
			$(".results").css("display", "block");
			$(".results").text("the multiplication sign is positive");
		}
		else {
			$(".results").css("display", "block");
			$(".results").text("the multiplication sign is negative");
		}
			
		});
	});
	var modal = document.getElementById('block');
	window.onclick = function(event) {
             if (event.target == modal) {
                 modal.style.display = "none";
             }
            }
			
			
			/*$(document).on('keydown keyup ',  function (e) {
if($('#block').is(':visible')) {
            var key = e.which;
			alert(key);
                
				if (key == 13) { //This is an ENTER 
                    $('.executing-Button').click();
                }*/
        
    
});