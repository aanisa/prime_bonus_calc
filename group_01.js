var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];
//objects would've been better to use here
var employees = [atticus, jem, boo, scout, robert, mayella];


function bonusCalc (employeeNum, salary, rating){

  var bonusPercent = 0;

  switch (rating) {
//added case for 1 and 2 percent, eventhough it's zero now, it could change later on.
//add case 1 and 2 rather than a default.
//case: 1, bonusPercent += 0; break; case 2: bonusPercent += 0; break;
//rating is a number not a string (refer to employee arrays)
    case 3:
    bonusPercent += 0.04;
    break;

    case 4:
    bonusPercent += 0.06;
    break;

    case 5:
    bonusPercent += 0.10;
    break;
}

  if (employeeNum.length == 4) {
    bonusPercent += 0.05;
  }

  if (salary.parseInt > 65000) {
    bonusPercent = 0.01;
  }

  if(bonusPercent > 0.13) {
    bonusPercent = 0.13;
  }

  else if (bonusPercent < 0) {
    bonusPercent = 0;
  }
  return bonusPercent;
}


function empOutput (employee) {
var result = []; //create new empty array to output an array of employee arrays

var basePay = parseInt(employee[2]);
var bonusPercent = bonusCalc(employee[1], employee[2], employee[3]);
var bonus = basePay * bonusPercent;
//new variables with equations. more readable


result [0] = employee[0];
result [1] = bonusPercent;
result [2] = basePay + bonus;
result [3] = Math.round(bonus);

return result;

}


function master (employees) {
  for (var i = 0; i < employees.length; i++){

    var emp = empOutput(employees[i]);
    console.log(emp);

$('body').append("<p>" + emp + "</p>");
  }

}



master(employees);


console.log(bonusCalc('1234', '30000', 2));
console.log(bonusCalc('3454', '7000', 3));
console.log(bonusCalc('56789', '70000', 5));
console.log(bonusCalc('78956', '65000', 3));



console.log(empOutput(['Cooper', '1234', '30000', 2]));
console.log(empOutput(['Heraldo', '56789', '70000', 5]));
console.log(empOutput(['Blue', '3454', '7000', 3 ]));
console.log(empOutput(['Montel', '87654', '65000', 3]));
