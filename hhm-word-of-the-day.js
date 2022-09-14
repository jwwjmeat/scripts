window.onload = function(){chgDailyTxt();}
function chgDailyTxt()
{

var textarray = new Array();
textarray[13] = "¡Hola! — Hello!";
textarray[14] = "Buenos días = Good morning, Buenas tardes = Good afternoon, Buenas noches = Good evening";
textarray[15] = "Txt here";
textarray[16] = "Txt here";
textarray[17] = "Txt here";
textarray[18] = "Txt here";
textarray[19] = "Txt here";
textarray[20] = "Txt here";
textarray[21] = "Txt here";
textarray[22] = "Txt here";
textarray[23] = "Txt here";
textarray[24] = "Txt here";
textarray[25] = "Txt here";
textarray[26] = "Txt here";
textarray[27] = "Txt here";
textarray[28] = "Txt here";
textarray[29] = "Txt here";
textarray[30] = "Txt here";
textarray[1] = "Txt here";
textarray[2] = "Txt here";
textarray[3] = "Txt here";
textarray[4] = "Txt here";
textarray[5] = "Txt here";
textarray[6] = "Txt here";
textarray[7] = "Txt here";
textarray[8] = "Txt here";
textarray[9] = "Txt here";
textarray[10] = "Txt here";
textarray[11] = "Txt here";
textarray[12] = "Txt here";
textarray[13] = "Txt here";



var d = new Date(); /*** create a date object for use ***/
var i = d.getDate(); /*** use the date object to get the day of the week - this will be a number from 0 to 6 - sunday=0, saturday=6 -it's the way counting works in javascript it starts at 0 like in the arrays ***/
document.getElementById("dailyTxt").innerHTML = textarray[i];
}


