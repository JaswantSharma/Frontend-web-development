/*var element = document.getElementsByClassName('list-item');
element.addEventListener('mouseover', function() {
  console.log('Event triggered');
});

var event = new MouseEvent('mouseover', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});

element.dispatchEvent(event);*/

const colorSwitch=document.getElementById('switch')


	colorSwitch.addEventListener('click',checkMode);



function checkMode(){
	console.log('checking...');
	if(colorSwitch.checked){
		console.log('darkmode');
		darkmode();
	}
	else{
		console.log('switch off');
		modeoff();
	}
}


function darkmode(){
	document.body.style.backgroundColor = "#091921";


var a =document.getElementsByClassName("list");
	const len=a.length;
	for (var i=0;i<a.length;i++)
	{
	a[i].classList.add("list-item");
	}

	for (var i=0;i<len;)
	{
	a[i].classList.remove("list");
	}

}

function modeoff(){
	document.body.style.backgroundColor = "#ecf0f3";
		var a =document.getElementsByClassName("list-item");
	const len=a.length;
	
for (var i=0;i<len;i++)
{
	a[i].classList.add("list");
}

for (var i=0;i<len;)
{
	a[i].classList.remove("list-item");
}
}
