module.exports = function toReadable (number) {
	let units = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	],
	dozens1  = [
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
	],
	dozens2  = [
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
	];
	
	let result = String(number).split("").reverse();
	
	let firstDigit = [],
	  secondDigit = [],
	  thirdDigit = [];
	  
	firstDigit.push(result[0]);
	secondDigit.push(result[1]);
	thirdDigit.push(result[2]);
	
	
	let from0to9 = firstDigit.map(value => units[value-1]).join(""),
	
	  from10to19 = firstDigit.map(value => dozens1[value]).join(""),
	
	  from20to99 = `${secondDigit.map(value => dozens2[value-2]).join("")} ${from0to9}`,
	  
	  third = thirdDigit.map(value => units[value-1]).join(""),
	
	  fromX00toX09 = `${third} hundred ${from0to9}`,
	
	  fromX10toX19 = `${third} hundred ${from10to19}`,
	
	  fromX20toX99 = `${third} hundred ${from20to99}`;
	
	if (number == 0) {
	  return "zero"
	}
	
	if (number >= 0 && number <=9)
	  return from0to9;
	
	else if (number >= 10 && number <= 19) {
	  return from10to19;
	}
	
	else if (number >= 20 && number <= 99) {
	  if (result[0] == 0){
		from20to99 = from20to99.split("");
		from20to99.pop();
		from20to99 = from20to99.join("");
	  }
	  return from20to99;
	}
	
	else if (number >= 100 && result[1] == 0) {
    if (result[0] == 0){
			fromX00toX09 = fromX00toX09.split("");
			fromX00toX09.pop();
			fromX00toX09 = fromX00toX09.join("");
		}
	  return fromX00toX09;
	}
	
	else if (number >= 100 && result[1] == 1) {
	  return fromX10toX19;
	}
	
	else if (number >= 100 && result[1] > 1) {
		if (result[0] == 0){
			fromX20toX99 = fromX20toX99.split("");
			fromX20toX99.pop();
			fromX20toX99 = fromX20toX99.join("");
		}
	  return fromX20toX99;
	}
}
