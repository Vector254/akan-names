function generateName(){
var CC=parseInt( document.getElementById("century").value);
var YY=parseInt(document.getElementById("year").value);
var MM=parseInt(document.getElementById("month").value);
var DD=parseInt(document.getElementById("day").value);
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var Day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
var exactDay=Day.toFixed();

if (exactDay==="0")
    {
        document.getElementById("result").value="You were born on sunday, your akan name is:"+maleNames[0];    
    }
else if (exactDay==="1")
    {
        document.getElementById("result").value="You were born on monday, your akan name is:"+maleNames[1];
    }
else if (exactDay==="2")
    {
        document.getElementById("result").value="You were born on tuesday, your akan name is:"+maleNames[2];
    }
else if (exactDay==="3")
    {
        document.getElementById("result").value="You were born on wednesday, your akan name is:"+maleNames[3];
    }
else if (exactDay==="4")
    {
        document.getElementById("result").value="You were born on thursday, your akan name is:"+maleNames[4];
    }
else if (exactDay==="5")
    {
        document.getElementById("result").value="You were born on friday, your akan name is:"+maleNames[5];
    }
else
    {
        document.getElementById("result").value="You were born on saturday, your akan name is:"+maleNames[6];
    }



}