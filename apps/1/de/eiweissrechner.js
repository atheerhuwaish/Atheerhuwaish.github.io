var datalist = document.getElementById("fooditems1");
var mbutton = document.getElementById("foodbutton");
var food1 = document.getElementById("food1");
var datalist = document.getElementById("fooditems1");
var mreset = document.getElementById("reset");
var foodinput = document.getElementById("foodinput");


function grayinputborder(){foodinput.style.borderColor="gray";
						   bodyweightelem.style.borderColor="gray";}

window.addEventListener("load", grayinputborder);

function redinputborder(){foodinput.style.borderColor="red";}


	
var bodyweightelem = document.querySelector("#bodyweight");
	
bodyweightelem.addEventListener("input", verifyweight);
	
function verifyweight(){
	if (bodyweightelem.value < 1  ||  bodyweightelem.value > 600 
								  || bodyweightelem.value.length < 1 )
		{food1.innerHTML ="Please enter a valid body weight number";
		food1.style.color ="red";
		bodyweightelem.style.borderColor="red";
		return false}
		
		else 
		{
		bodyweightelem.style.borderColor="gray";
		proteincalculate();
		}
}
	
	


function proteincalculate (){
	
	food1.innerHTML = "<br>Eiweißgehalt: <input type='number' class='proteincontent' min='0' max='100'>%<br>"
	
	var proteincontentelem = document.querySelector(".proteincontent");
	var proteincontent = proteincontentfunc();
	proteincontentelem.setAttribute("value", proteincontent);
	
	
	if (!proteincontent) {redinputborder();
						food1.style.color ="red";
						return food1.innerHTML ="Nährstoff nicht gefunden, Sie können einen wählen/eingeben oder CE wählen und nochmals versuchen";
						}
						else {food1.style.color ="black";}	
		
		
	food1.innerHTML += "<input type='number' class='foodamount' value='100' min='0' max='9999'> g beinhalten ";
	var bodyweight = bodyweightelem.value;
	
	
	var foodamountelem= document.querySelector(".foodamount");
	var foodamount = foodamountelem.value;
	foodamountelem.setAttribute("value", foodamount);
	
	proteinsubtotal= parseInt(foodamount * proteincontent / (1.1 * bodyweight)  );
											
	food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
	
	food1.innerHTML += " des täglichen Bedarfs.";
	

}

	
function proteincontentfunc(){
	
	
	switch (foodinput.value.toLowerCase()) {

	case "gebackene bohnen" : 
	return proteincontent = 5.2;
	
	case "mandeln" : 
	return proteincontent = 19.35;
	
	case "brot" : 
	return proteincontent = 7.9;
	
	case "chiasamen" : 
	return proteincontent = 18.29;
	
	case "cheddarkäse" : 
	return proteincontent = 8.75;
	
	case "hüttenkäse" : 
	return proteincontent = 25.4;	
	
	case "cornflakes" : 
	return proteincontent = 12.6;	
	
	case "kichererbsen" : 
	return proteincontent = 7.5;
	
	case "eier" : 
	return proteincontent = 12.5;
	
	case "leinsamen" : 
	return proteincontent = 18.29;
	
	case "haselnüsse" : 
	return proteincontent = 14.1;
	
	case "kidneybohnen" : 
	return proteincontent = 6.9;
	
	case "hafer" : 
	return proteincontent = 11.2;
	
	case "rote linsen" : 
	return proteincontent = 7.6;
	
	case "reis" : 
	return proteincontent = 6.67;
	
	case "seitan" : 
	return proteincontent = 19.05;
	
	case "sojabohnen" : 
	return proteincontent = 38.55;
	
	case "sojamilch" : 
	return proteincontent = 2.6;

	case "sojasauce" : 
	return proteincontent = 8.14;
	
	case "tofu" : 
	return proteincontent = 9.41;
	
	case "walnüsse" : 
	return proteincontent = 14.7;
	
	case "weizenmehl" : 
	return proteincontent = 12.6;
	
	case "vollmilch" : 
	return proteincontent = 3.3;
	
	case "vollmilch joghurt" : 
	return proteincontent = 5.7;
	
	default: proteincontent = false;
	}
	}
	



function fooddetailsclick (){
	if ( foodinput.value.length > 0 ) {
	grayinputborder()
	verifyweight();
    }
	else if  (foodinput.value.length <= 0) {redinputborder()}
}
	
function fooddetailskey (event) {
	if ( foodinput.value.length > 0 && event.which === 13 ) {
	grayinputborder()
	verifyweight();
    }
	else if (foodinput.value.length <= 0) {redinputborder()}
}

foodinput.addEventListener ("keyup", fooddetailskey);
mbutton.addEventListener ("click", fooddetailsclick);

	

mreset.addEventListener ("click", function () {
food1.innerHTML = "";
foodinput.value = "";
})