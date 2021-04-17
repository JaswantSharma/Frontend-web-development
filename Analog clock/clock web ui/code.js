setInterval(() => {
	d= new Date();
	hour=d.getHours();
	minutes=d.getMinutes();
	second=d.getSeconds();
	hrr=30*hour+minutes/2;
	mnr=6*minutes;
	secr=6*second;

	hr.style.transform=`rotate(${hrr}deg)`;
	mn.style.transform=`rotate(${mnr}deg)`;
	sec.style.transform=`rotate(${secr}deg)`;
}, 1000);