function add(a, b) {
	a = a + b;
	return a;
}
function subtract(a, b) {
	a = a - b;
	return a;
}
function multiply(a, b) {
	a = a * b;
	return a;
}
function divide(a, b) {
	a = a / b;
	return a;
}
//combines functions: add, subtract, multiply, divide
function operate(operator, num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	switch (operator) {
		case '+':
			return add(num1, num2);
			break;
		case '-':
			return subtract(num1, num2);
			break;
		case '*':
			return multiply(num1, num2);
			break;
		case '/':
			return divide(num1, num2);
			break;
		default:
			return 'error';
	}
}
function populateCalculator() {
	let calculator = document.querySelector('#calculator');
	let parts = 3;

	//creates the 3 major sections of the calculator
	for (let i = 0; i < 3; i++) {
		let part = document.createElement('div');
		part.classList = 'parts';
		part.id = `part${i}`;
		calculator.appendChild(part);
	}
	//creates the screen
	let screen = document.createElement('div');
	screen.id = 'screen';
	screen.innerHTML = `<input id="display" type="text" readonly>`;

	let part0 = document.querySelector('#part0');
	part0.appendChild(screen);
	//creates the numbers
	let part1 = document.querySelector('#part1');
	for (let i = 1; i < 13; i++) {
		let number = document.createElement('div');
		number.classList = 'numbers';
		if (i == 11) {
			number.id = `number0`;
			number.innerHTML = `<h1>0</h1>`;
		} else {
			number.id = `number${i}`;
			if (!(i == 12 || i == 10)) number.innerHTML = `<h1>${i}</h1>`;
		}
		part1.appendChild(number);
	}
	//creates the operators
	let operators = [ 'clear', 'add', 'subtract', 'multiply', 'divide', 'equal' ];
	let operatorSymbols = [ 'cl', '+', '-', 'x', '/', '=' ];
	let part2 = document.querySelector('#part2');
	for (let i = 0; i < operators.length; i++) {
		let operator = document.createElement('div');
		operator.classList = 'operators';
		operator.id = `operator${_capitalize(operators[i])}`;
		operator.innerHTML = `<h1>${operatorSymbols[i]}</h1>`;
		part2.appendChild(operator);
	}
}
function _capitalize(str) {
	return str[0].toUpperCase() + str.slice(1, str.length);
}
function populateScreen(x) {
	let display = document.querySelector('#display');
	tempStorage += x;
	display.value = tempStorage;
}
function clearScreen() {
	let display = document.querySelector('#display');
	display.value = '';
}
function activateNumbers() {
	let numbers = Array.from(document.querySelectorAll('.numbers'));
	numbers = numbers.filter((x) => x.id != 'number10');
	numbers = numbers.filter((x) => x.id != 'number12');
	numbers.map((x) =>
		x.addEventListener('click', function() {
			//when a number is clicked
			populateScreen(x.firstElementChild.innerText);
		})
	);
}
function activateOperators() {
	let operators = Array.from(document.querySelectorAll('.operators'));
	operators.map((x) =>
		x.addEventListener('click', function() {
			//console.log(x.firstElementChild.innerText);
			let value = x.firstElementChild.innerText;
			//swap x out for *
			if (value == 'x') value = '*';
			switch (value) {
				case 'cl':
					clearScreen();
					tempStorage = '';
					numStorage = [];
					break;
				case '+':
					if (numStorage.length == 0) {
						//if num is empty
						if (tempStorage == '') {
							//if both are empty do nothing
						} else {
							//if only numStorage is empty
							//push temp to num w/ operator
							numStorage.push(tempStorage);
							numStorage.push(value);
							clearScreen();
							tempStorage = '';
						}
					} else {
						//if num not empty
						if (tempStorage == '') {
							//if temp is empty
							//replace previous operator
							numStorage[1] = value;
						} else {
							//if num & temp is not empty
							numStorage[0] = operate(numStorage[1], numStorage[0], tempStorage);
							numStorage[1] = value;
							clearScreen();
							tempStorage = '';
							populateScreen(numStorage[0]);
							tempStorage = '';
						}
					}
					break;
				case '-':
					if (numStorage.length == 0) {
						//if num is empty
						if (tempStorage == '') {
							//if both are empty do nothing
						} else {
							//if only numStorage is empty
							//push temp to num w/ operator
							numStorage.push(tempStorage);
							numStorage.push(value);
							clearScreen();
							tempStorage = '';
						}
					} else {
						//if num not empty
						if (tempStorage == '') {
							//if temp is empty
							//replace previous operator
							numStorage[1] = value;
						} else {
							//if num & temp is not empty
							numStorage[0] = operate(numStorage[1], numStorage[0], tempStorage);
							numStorage[1] = value;
							clearScreen();
							tempStorage = '';
							populateScreen(numStorage[0]);
							tempStorage = '';
						}
					}
					break;
				case '*':
					if (numStorage.length == 0) {
						//if num is empty
						if (tempStorage == '') {
							//if both are empty do nothing
						} else {
							//if only numStorage is empty
							//push temp to num w/ operator
							numStorage.push(tempStorage);
							numStorage.push('*');
							clearScreen();
							tempStorage = '';
						}
					} else {
						//if num not empty
						if (tempStorage == '') {
							//if temp is empty
							//replace previous operator
							numStorage[1] = value;
						} else {
							//if num & temp is not empty
							numStorage[0] = operate(numStorage[1], numStorage[0], tempStorage);
							numStorage[1] = value;
							clearScreen();
							tempStorage = '';
							populateScreen(numStorage[0]);
							tempStorage = '';
						}
					}
					break;
				case '/':
					if (numStorage.length == 0) {
						//if num is empty
						if (tempStorage == '') {
							//if both are empty do nothing
						} else {
							//if only numStorage is empty
							//push temp to num w/ operator
							numStorage.push(tempStorage);
							numStorage.push(value);
							clearScreen();
							tempStorage = '';
						}
					} else {
						//if num not empty
						if (tempStorage == '') {
							//if temp is empty
							//replace previous operator
							numStorage[1] = value;
						} else {
							//if num & temp is not empty
							numStorage[0] = operate(numStorage[1], numStorage[0], tempStorage);
							numStorage[1] = value;
							clearScreen();
							tempStorage = '';
							populateScreen(numStorage[0]);
							tempStorage = '';
						}
					}
					break;
				case '=':
					if (numStorage.length == 0) {
						//if num is empty
						if (tempStorage == '') {
							//if both are empty do nothing
						} else {
							//if only numStorage is empty
							//push temp to num w/ operator
							//for equals, leave temp/screen full
						}
					} else {
						//if num not empty
						if (tempStorage == '') {
							//if temp is empty
							//display stored num, clear numStorage
							populateScreen(numStorage[0]);
							numStorage = [];
						} else {
							//if num & temp is not empty
							numStorage[0] = operate(numStorage[1], numStorage[0], tempStorage);
							//numStorage[1] = value;
							clearScreen();
							tempStorage = '';
							populateScreen(numStorage[0]);
							tempStorage = '';
						}
					}
					break;
				default:
			}
			//move tempStorage to numStorage
			//add operator to numStorage
			//clear screen
			//clear tempStorage
		})
	);

	//console.log(operators);
}

//console.log(operate('/', 4, 2));
//console.log(_capitalize('no way'));
let tempStorage = '';
let numStorage = [];
populateCalculator();
activateNumbers();
activateOperators();
