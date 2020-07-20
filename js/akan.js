function validate (){
    var date=new Date();
    var today=date.getFullYear();//get the current year to use it later for validation
    var year=parseInt(document.getElementById("year").value);//get relevant input and convert to interger
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    if(year="" || year>today ||year<1900) //validate the year entered against current year and least possible year
        {
            alert("please enter a valid year of birth!");
            return false;
        }
     else if(month="" || month>12 ||month<1)//validate month entered is not less than 1 or more than 12
        {
            alert("please enter a valid month");
            return false;
        }

    else if (month=("4"||"6"||"9"||"11") && day>30)//validate input months with 30 days do not not exceed the 30 days
        {
            alert("This month has 30 days!");
            return false;
        }
    else if (month="2"&& day>29)//validate february does not exceed 28
        {
            alert("February does not exceed 29 days!")
            return false;
        }
    else if(day="" || day<1 || day>31)
        {
            alert("please enter a valid day");
            return false;
        }
    else {return true;}
    
    }

function generateName(){
    validate();
    

var CC=parseInt( document.getElementById("year").value.slice(0,2));//declare variables and convert them to integers
var YY=parseInt(document.getElementById("year").value.slice(2,4));
var MM=parseInt(document.getElementById("month").value);
var DD=parseInt(document.getElementById("day").value);
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var Day=(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7)-1; //calculate the day of the week 
var exactDay=Day.toFixed();// convert the day calculated into a whole number
var gender=parseInt(document.getElementById("gender").value);

if (gender=="1"){  //check gender against day of week and display the relevant akan name
    else if (exactDay==="0")
        {
            document.getElementById("result").value="Born on Sunday, your akan name is:"+maleNames[0];    
        }
    else if (exactDay==="1")
        {
            document.getElementById("result").value="Born on Monday, your akan name is:"+maleNames[1];
        }
    else if (exactDay==="2")
        {
            document.getElementById("result").value="Born on Tuesday, your akan name is:"+maleNames[2];
        }
    else if (exactDay==="3")
        {
            document.getElementById("result").value="Born on Wednesday, your akan name is:"+maleNames[3];
        }
    else if (exactDay==="4")
        {
            document.getElementById("result").value="Born on thursday, your akan name is:"+maleNames[4];
        }
    else if (exactDay==="5")
        {
            document.getElementById("result").value="Born on friday, your akan name is:"+maleNames[5];
        }
    else if (exactDay==="6")
        {
            document.getElementById("result").value="Born on saturday, your akan name is:"+maleNames[6];
        }
    else {return false;}
    }

if (gender=="2"){
    if (exactDay==="0")
        {
            document.getElementById("result").value="Born on Sunday, your akan name is:"+femaleNames[0];
        }
    else if (exactDay==="1")
        {
            document.getElementById("result").value="Born on Monday, your akan name is:"+femaleNames[1];
        }
    else if (exactDay==="2")
        {
            document.getElementById("result").value="Born on Tuesday, your akan name is:"+femaleNames[2];
        }
    else if (exactDay==="3")
        {
            document.getElementById("result").value="Born on Wednesday, your akan name is:"+femaleNames[3];
        }
    else if (exactDay==="4")
        {
            document.getElementById("result").value="Born on Thursday, your akan name is:"+femaleNames[4];
        }
    else if (exactDay==="5")
        {
            document.getElementById("result").value="Born on Friday, your akan name is:"+femaleNames[5];
        }
    else
        {
            document.getElementById("result").value="Born on Saturday, your akan name is:"+femaleNames[6];
        }
    }
}
function clearData()
    {
        document.getElementById("form").reset();//clear form input data
    }

function clearAll()
    {
        document.getElementById("output").reset();
    }