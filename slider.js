var sliderWrap = document.querySelector("#sliderWrap");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var moveStep=500;
var posX=0;
var imageCount = childNodeCount();
var curChild=1;
prev.addEventListener("click", function(){
		posX-=moveStep;
		curChild++;
		if(curChild > 1)next.style.visibility = 'visible';
		if(curChild == imageCount ){prev.style.visibility = 'hidden';}

	sliderWrap.style.transform="translate("+posX+"px)";
	display();
});
next.addEventListener("click", function(){
		posX+=moveStep;
		curChild--;
		if(curChild < imageCount){prev.style.visibility = 'visible';}
		if(curChild == 1 ){next.style.visibility = 'hidden';}
	sliderWrap.style.transform="translate("+posX+"px)";
	display();
});


function childNodeCount(){
	var count = sliderWrap.childNodes.length;
	var i = 0;
	var realChild=0;
	while(i < count){
		if(sliderWrap.childNodes[i].nodeType != 3){
			realChild++;
		}
		i++;
	}
	return realChild;
}
(function(){
	var next = document.querySelector("#next");
	document.querySelector("#cur").innerHTML=1;
	document.querySelector("#total").innerHTML=imageCount;
	next.style.visibility = 'hidden';
})();
function display(){
	var cur = document.querySelector("#cur");
	var total = document.querySelector("#total");
	//if(curChild < 1 || curChild > imageCount){cur.style.color="#ccc";}	
	cur.innerHTML=curChild;
	total.innerHTML=imageCount;
}