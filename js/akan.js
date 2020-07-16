function validate (){
    var date=new Date();
    var today=date.getFullYear();
    var year=parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    if(year="" || year>today ||year<1900)
        {
            alert("please enter a valid year of birth!");
            return false;
        }
    if(month="" || month>12 ||month<1)
        {
            alert("please enter a valid month");
            return false;
        }
        
    if (month=("4"||"6"||"9"||"11") && day>30)
        {
            alert("This month has 30 days!");
            return false;
        }
    if (month="2"&& day>28)
        {
            alert("This month in that year had 28 days!")
            return false;
        }
    if(day="" || day<1 || day>31)
        {
            alert("please enter a valid day");
            return false;
        }
    }

function generateName(){
var CC=parseInt( document.getElementById("year").value.slice(0,2));
var YY=parseInt(document.getElementById("year").value.slice(2,4));
var MM=parseInt(document.getElementById("month").value);
var DD=parseInt(document.getElementById("day").value);
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var Day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
var exactDay=Day.toFixed();
var gender=parseInt(document.getElementById("gender").value);

if (gender=="1"){
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

if (gender=="2"){
    if (exactDay==="0")
        {
            document.getElementById("result").value="You were born on sunday, your akan name is:"+femaleNames[0];
        }
    else if (exactDay==="1")
        {
            document.getElementById("result").value="You were born on monday, your akan name is:"+femaleNames[1];
        }
    else if (exactDay==="2")
        {
            document.getElementById("result").value="You were born on tuesday, your akan name is:"+femaleNames[2];
        }
    else if (exactDay==="3")
        {
            document.getElementById("result").value="You were born on wednesday, your akan name is:"+femaleNames[3];
        }
    else if (exactDay==="4")
        {
            document.getElementById("result").value="You were born on thursday, your akan name is:"+femaleNames[4];
        }
    else if (exactDay==="5")
        {
            document.getElementById("result").value="You were born on friday, your akan name is:"+femaleNames[5];
        }
    else
        {
            document.getElementById("result").value="You were born on saturday, your akan name is:"+femaleNames[6];
        }
    }
}
function clearData()
    {
        document.getElementById("form").reset();
    }

function clearOutput()
    {
        document.getElementById("result").reset();
    }
