let statement = "A long time ago in a country far away from Nigeria...";
let statlen = statement.length;

console.log(statlen)

console.log(statement.slice(0,1));

console.log(statement.substring(0,1));

console.log(statement.substr(0,1));



console.log(statement.slice(12,15));

console.log(statement.substring(12,15));

console.log(statement.substr(12,3));



console.log(statement.slice(-20,-16));

console.log(statement.substring(33,37));

console.log(statement.substr(33,4));




console.log(statement.slice(-10,-3));

console.log(statement.substring(43,50));

console.log(statement.substr(43,7));



console.log(statement.slice(-3));

console.log(statement.substring(50));

console.log(statement.substr(50,3));



document.getElementById("st").innerHTML="JavaScript STRING"
document.getElementById("sl").innerHTML= statement;

document.getElementById("s0").innerHTML= "A";
document.getElementById("s1").innerHTML= "ago";
document.getElementById("s2").innerHTML= "away";
document.getElementById("s3").innerHTML= "Nigeria";
document.getElementById("s4").innerHTML= "...";


document.getElementById("t1").innerHTML= statement.slice(0,1);
document.getElementById("t2").innerHTML= statement.substring(0,1);
document.getElementById("t3").innerHTML= statement.substr(0,1);


document.getElementById("t4").innerHTML= statement.slice(12,15);
document.getElementById("t5").innerHTML= statement.substring(12,15);
document.getElementById("t6").innerHTML= statement.substr(12,3);


document.getElementById("t7").innerHTML= statement.slice(-20,-16);
document.getElementById("t8").innerHTML= statement.substring(33,37);
document.getElementById("t9").innerHTML= statement.substr(33,4);


document.getElementById("t10").innerHTML= statement.slice(-10,-3);
document.getElementById("t11").innerHTML= statement.substring(43,50);
document.getElementById("t12").innerHTML= statement.substr(43,7);


document.getElementById("t13").innerHTML= statement.slice(-3);
document.getElementById("t14").innerHTML= statement.substring(50);
document.getElementById("t15").innerHTML= statement.substr(50,3);



