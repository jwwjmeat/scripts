window.onload = function(){chgDailyTxt();}
function chgDailyTxt()
{

var textarray = new Array();
textarray[14] = "Hispanic Heritage Month Word of the Day begins September 15!";
textarray[15] = "¡Hola! — Hello!";
textarray[16] = "Buenos días = Good morning <br>Buenas tardes = Good afternoon<br> Buenas noches = Good evening";
textarray[17] = "¡Bienvenidos! / ¡Bienvenidas! - Welcome!";
textarray[18] = "¡Gracias! — Thank you! <br> ¡Muchas gracias! — Thank you very much!";
textarray[19] = "Por favor — Please (generally used at the end of a sentence)";
textarray[20] = "¡De nada! — You're welcome!";
textarray[21] = "¡Perdona! — Excuse me!<br>¡Disculpe! / ¡Discúlpeme!— Excuse me! (used to apologize in advance for being a bit of a bother)";
textarray[22] = "¡Lo siento! — Sorry! (In case you make a mistake)";
textarray[23] = "Salud = Bless you (after someone sneezes) or Cheers!";
textarray[24] = "Hola, me llamo Juan = Hello, my name is John<br>Me llamo… = My name is…<br>¿Cómo te llamas? = What's your name?";
textarray[25] = "Mucho gusto = Nice to meet you";
textarray[26] = "¿Cómo estás? = How are you?<br>Estoy bien, gracias = I'm well thank you";
textarray[27] = "¿Qué…? — What…?<br>¿Quién…? — Who…<br>?¿Cuándo…? — When…?<br>¿Cuál…? — Which…?<br>¿Cómo…? — How…?<br>Dónde…? — Where…?<br>¿Por qué…? — Why…?";
textarray[28] = "Sí — Yes.<br>?No — No.<br>?Tal vez — Maybe.<br>?Nunca = Never<br>?A veces = Sometimes<br>?Claro = Of course<br>?¡Sin problema! — No problem!. Spanish people usually add “claro” at the end.<br>?No lo sé — I don’t know!";
textarray[29] = "Disculpa. ¿Dónde está el baño? = Excuse me. Where is the bathroom?";
textarray[30] = "¿Qué hora es? Or ¿Qué hora tienes? – What time is it?= What time is it?";




var d = new Date(); /*** create a date object for use ***/
var i = d.getDate(); /*** use the date object to get the day of the week - this will be a number from 0 to 6 - sunday=0, saturday=6 -it's the way counting works in javascript it starts at 0 like in the arrays ***/
document.getElementById("dailyTxt").innerHTML = textarray[i];
}


