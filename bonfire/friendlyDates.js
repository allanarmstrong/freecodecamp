function nth(n) {
	if (n >3 && n < 21) return 'th';

	switch (n%10) {
		case 1: return 'st';
		case 2: return 'nd';
		case 3: return 'rd';
		default: return 'th';
	}

}
function friendly(str) {

	//I'm so ashamed of this it's just a mess....

  var firstDate = str[0].split('-');
  var secondDate = str[1].split('-');
  
  var currDate = new Date();
  
  var date1 = new Date(firstDate);
  var date2 = new Date(secondDate);

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (str[0] === str[1]) {
    console.log("yay");
    return [months[date1.getMonth()] + " " + date1.getDate() + nth(date1.getDate()) + ", " + date1.getFullYear()];
    
  } else {
  
  if (parseInt(firstDate[0]) == parseInt(secondDate[0]) && parseInt(firstDate[1]) == parseInt(secondDate[1]) && parseInt(firstDate[2]) !== parseInt(secondDate[2])) {

    return [months[date1.getMonth()] + " " + firstDate[2].substr(1,2) + nth(parseInt(firstDate[2])), 
    secondDate[2].substr(1,2) + nth(parseInt(secondDate[2]))]; 

  } else if (parseInt(firstDate[0]) != parseInt(secondDate[0])) {

    if (date1.getFullYear() == currDate.getFullYear() && parseInt(firstDate[0]) + 1 == parseInt(secondDate[0])) {
    	if (parseInt(firstDate[1]) == parseInt(secondDate[1]))
    		return [months[date1.getMonth()] + " " + date1.getDate() + nth(date1.getDate()), 
    months[date2.getMonth()] + " " + date2.getDate() + nth(date2.getDate())];

    	else 
      		return [months[date1.getMonth()] + " " + firstDate[2].substr(1,2) + nth(parseInt(firstDate[2])), 
    months[date2.getMonth()] + " " + secondDate[2].substr(1,2) + nth(parseInt(secondDate[2]))];
    
    } else {
      
      return [months[date1.getMonth()] + " " + date1.getDate() + nth(date1.getDate()) + ", " + date1.getFullYear(), months[date2.getMonth()] + " " + date2.getDate() + nth(date2.getDate()) + ", " + date2.getFullYear() ];
      
    }
  } else if(parseInt(firstDate[0]) == parseInt(secondDate[0])) {
     return [months[date1.getMonth()] + " " + date1.getDate() + nth(date1.getDate()),
            months[date2.getMonth()] + " " + date2.getDate() + nth(date2.getDate()) + ", " + date2.getFullYear()];
   }
  }

}
friendly(['2017-01-01', '2017-01-01']);
