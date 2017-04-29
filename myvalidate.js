
 function myFunction() {

 

 var x = document.forms["FMS"]["fname"];
    if (x.value == "") {
        alert("FName should not be blank !!");
        return false;
    }

	if (! allLetter(x)) {
		 alert("FName should be all characters!!");
		 return false;
	}
	
var x1 = document.forms["FMS"]["mname"];
    if (x1.value == "") {
        alert("MName should not be blank !!");
        return false;
    }

	if (! allLetter(x1)) {
		 alert("MName should be all characters!!");
		 return false;
	}
	
	var x2 = document.forms["FMS"]["lname"];
    if (x2.value == "") {
        alert("LName should not be blank !!");
        return false;
    }

	if (! allLetter(x2)) {
		 alert("LName should be all characters!!");
		 return false;
	}
	


var y = document.forms["FMS"]["num"];

  if (y.value == "") {
                alert("Contact No. should not be blank !!");
		            
		return false;
            }

	if (! allnumeric(y)) {
		 alert('Please input numeric characters only');
      return false;
	}

var z = document.forms["FMS"]["em"];

  if (z.value == "") {
                alert("Email should not be blank !!");
		            
		return false;
            }

	if (! ValidateEmail(z)) {
		 alert('Please input valid Email ID!!!');
      return false;
	}


var t = document.forms["FMS"]["Specification"];

  if (z.value == "") {
                alert("Specification should not be blank !!");
		            
		return false;
            }

	if (! ValidateEmail(z)) {
		 alert('Please input valid Specification!!!');
      return false;
	}

 }







            function allLetter(inputtxt)
                {
                 var letters = /^[A-Za-z]+$/;
                 if(inputtxt.value.match(letters))
                   {
              	     return true;
                   }
                 else
                   {
              	     return false;
                   }
                }


            function allnumeric(inputtxt)
               {
                  var numbers = /^[0-9]+$/;
                  if(inputtxt.value.match(numbers))
                  {
                    return true;
                  }
                  else
                  {
                    return false;
                  }
               }

  

            function limit(element,limit)
              {
                var max_chars = limit;

                  if(element.value.length > max_chars) {
                    element.value = element.value.substr(0, max_chars);
                  }
              }

			
			 
			function ValidateEmail(inputText)
			 {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(inputText.value.match(mailformat))
					{
					
					return true;
					}
				else
					{
					return false;
					}
			}

			function deptselect(dept)
				{
					
					if(dept.value == "no")
					{
						 alert('no');
						return false;
					}
					else
					{
						 alert('yes');
						return true;
					}
				}
