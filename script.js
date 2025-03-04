function makeRes() 
{
	var name = document.getElementById("resName").value;
	var date = document.getElementById("resDate").value;
	var time = document.getElementById("resTime").value;
	document.getElementById("resMade").innerHTML = "Thank you, " + name + ", for making a reservation on " + date + " at " + time + ". We look forward to having you!";
}

var cost = 0;
var roundCost = 0;

var item1 = 0;
var cost1 = 7.99;
function addItem1() {
	item1++;
	cost += cost1;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount1").innerHTML = "Item Count: " + item1;
	document.getElementById("cost").innerHTML = roundCost;
} 
function removeItem1() {
	if ( item1 > 0 ){
	item1--;
	cost -= cost1;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount1").innerHTML = "Item Count: " + item1;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML = Math.abs(roundCost);
	}
}

var item2 = 0;
var cost2 = 6.99;
function addItem2() {
	item2++;
	cost += cost2;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount2").innerHTML = "Item Count: " + item2;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem2() {
	if ( item2 > 0){
	item2--;
	cost -= cost2;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount2").innerHTML = "Item Count: " + item2;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item3 = 0;
var cost3 = 9.99;
function addItem3() {
	item3++;
	cost += cost3;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount3").innerHTML = "Item Count: " + item3;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem3() {
	if ( item3 > 0){
	item3--;
	cost -= cost3;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount3").innerHTML = "Item Count: " + item3;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item4 = 0;
var cost4 = 4.50;
function addItem4() {
	item4++;
	cost += cost4;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount4").innerHTML = "Item Count: " + item4;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem4() {
	if ( item4 > 0){
	item4--;
	cost -= cost4;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount4").innerHTML = "Item Count: " + item4;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item5 = 0;
function addItem5() {
	item5++;
	cost += cost1;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount5").innerHTML = "Item Count: " + item5;
	document.getElementById("cost").innerHTML = roundCost;
} 
function removeItem5() {
	if ( item5 > 0 ){
	item5--;
	cost -= cost1;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount5").innerHTML = "Item Count: " + item5;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML = Math.abs(roundCost);
	}
}

var item6 = 0;
function addItem6() {
	item6++;
	cost += cost2;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount6").innerHTML = "Item Count: " + item6;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem6() {
	if ( item6 > 0){
	item6--;
	cost -= cost2;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount6").innerHTML = "Item Count: " + item6;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item7 = 0;
var cost7 = 12.99;
function addItem7() {
	item7++;
	cost += cost7;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount7").innerHTML = "Item Count: " + item7;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem7() {
	if ( item7 > 0){
	item7--;
	cost -= cost7;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount7").innerHTML = "Item Count: " + item7;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item8 = 0;
var cost8 = 14.99;
function addItem8() {
	item8++;
	cost += cost8;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount8").innerHTML = "Item Count: " + item8;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem8() {
	if ( item8 > 0){
	item8--;
	cost -= cost8;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount8").innerHTML = "Item Count: " + item8;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item9 = 0;
var cost9 = 10.99;
function addItem9() {
	item9++;
	cost += cost9;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount9").innerHTML = "Item Count: " + item9;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem9() {
	if ( item9 > 0){
	item9--;
	cost -= cost9;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount9").innerHTML = "Item Count: " + item9;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

var item10 = 0;
var cost10 = 22.99;
function addItem10() {
	item10++;
	cost += cost10;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount10").innerHTML = "Item Count: " + item10;
	document.getElementById("cost").innerHTML =	roundCost;
} 
function removeItem10() {
	if ( item10 > 0){
	item10--;
	cost -= cost10;
	let taxedCost = cost * 1.06;
	roundCost = taxedCost.toFixed(2);
	document.getElementById("itemCount10").innerHTML = "Item Count: " + item10;
	document.getElementById("cost").innerHTML = roundCost;
	} else {
		document.getElementById("cost").innerHTML =	Math.abs(roundCost);
	}
}

function order()
{
	var name = document.getElementById("orderName").value;
	document.getElementById("orderMade").innerHTML = "Thanks " + name + ", your order will be ready for collection in thirty minutes! Please be ready to pay $" + roundCost +" along with the cost for drink(s) of choice.";
}
