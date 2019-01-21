//Gets history value (inputs) and puts it up

function getHistory(){
	return document.getElementById("history-value").innerText;
}


// grabs element with the id of history-value
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}

//Prints output of output-value (if number is empty returns empty)
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
    }
    //getFormattedNumber = reads number and seperates using commas 
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}


 //returns nothing if - is pushed
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

//This will remove comma
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

//use for loop to access operators 1 by 1, make each clickable, 
//print nothing if id is equal to clear (and so on according to other inputs)
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

//Loop through numbers, checks if output is a number, if it is print output
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}