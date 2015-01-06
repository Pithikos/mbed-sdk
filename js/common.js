// Send a query to a service
function query(url, callback_name){
	url = url.indexOf('?') >= 0 ? url.concat('&') : url.concat('?');
	url = url.concat('callback='+callback_name);
	script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}


// Format given date
function friendly_date(date){
	var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "June", 
							"July", "Aug", "Sep", "Oct", "Nov", "Dec");
	var day   = date.getDate();
	var month = months[date.getMonth()];
	var year  = date.getFullYear();
	return month + ' ' + day + ', ' + year;
}
