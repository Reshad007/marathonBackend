//		  Aziz, Shekib
//      jadrn004 
//      Project #2
//      Fall 2017
	//Establishing AJAX connection	
	function retrieve() { 
		var xhr;
		var firstName = document.getElementById("firstName").value;
		var lastName = document.getElementById("lastName").value;
		var middleName = document.getElementById("middleName").value;
		var address = document.getElementById("address").value;
		var city = document.getElementById("city").value;
		var zipcode = document.getElementById("zipcode").value;
		var area_phone = document.getElementById("area_phone").value;
		var prefix_phone = document.getElementById("prefix_phone").value;
		var phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;

		
		
		upperCaseFirstLetter(firstName);		
		//var ageGroup = "adult";
		
		/*if(document.getElementById("adult").checked){
			//ageGroup = document.getElementById("adult").value;					
		}
		
			
		
		//var ageGroup = document.getElementById("novice").value;
		/*
		var gender = document.getElementById("gender").value;
		var DOB = document.getElementById("DOB").value;
		var medicalCondition = document.getElementById("medicalCondition").value;
		var expert = document.getElementById("expert").value;
		var experienced = document.getElementById("experienced").value;
		var novice = document.getElementById("novice").value;
		var teen = document.getElementById("teen").value;*/
			
		var params = ("firstName="     +firstName+ 
						  "&lastName="     +lastName+ 
						  "&middleName="   +middleName+ 
						  "&address="      +address+
						  "&city="         +city+
						  "&zipcode="      +zipcode+
						  "&area_phone="   +area_phone+
						  "&prefix_phone=" +prefix_phone+
						  "&phone="        +phone+
						  "&email="        +email
						  //"&ageGroup="     +ageGroup
						  /*
						  "&gender=" +gender+
						  "&DOB=" +DOB+
						  "&medicalCondition=" +medicalCondition+ 
						  "&expert=" +expert+
						  "&experienced=" +experienced+
						  "&novice=" +novice+
						  "&senior=" +senior+
						  "&adult=" +adult+
						  "&teen=" +teen*/); 
		
		
		if(window.XMLHttpRequest){
			try{
				xhr = new XMLHttpRequest();
			}catch(e){
				alert('error');
			}
		}else{
			alert('no connection');
		}
		
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById('message_line').innerHTML = this.responseText;
			}
		}
		
		xhr.open("POST", "transfer.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(params);

	}

	// Capitalize first letter 
	function upperCaseFirstLetter(string) 
	{
		 return string.charAt(0).toUpperCase() + string.slice(1);
	}
 
	// Checks if date entered is valid. format: mm/dd/yyyy
	function isValidDate(dateString)
	{
		 // First check for the pattern
		 if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
			  return false;

		 // Parse the date parts to integers
		 var parts = dateString.split("/");
		 var day = parseInt(parts[1], 10);
		 var month = parseInt(parts[0], 10);
		 var year = parseInt(parts[2], 10);

		 // Check the ranges of month and year
		 if(year < 1990 || year > 2016 || month == 0 || month > 12)
			  return false;

		 var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		 // Adjust for leap years
		 if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
			  monthLength[1] = 29;

		 // Check the range of the day
		 return day > 0 && day <= monthLength[month - 1];
	}

	 function checkGender(){
		 return ($('[name="gender"]:checked').val() == "male" || 
					$('[name="gender"]:checked').val() == "female");
	 }
	
	 function checkExperiance(){
		return ($('[name="experianceLevel"]:checked').val() == "expert" ||
				  $('[name="experianceLevel"]:checked').val() == "experienced" ||
				  $('[name="experianceLevel"]:checked').val() == "novice" );
	 }
		
	function checkAgeGroup(){
		return ($('[name="ageGroup"]:checked').val() == "senior" ||
				  $('[name="ageGroup"]:checked').val() == "adult" ||
				  $('[name="ageGroup"]:checked').val() == "teen" );
	}

    function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }  
        
    // copied from stackoverflow.com,         
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }                
                   
$(document).ready( function() {
    var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(17);
	
	 
	
    elementHandle[0] = $('[name="firstName"]');
    elementHandle[1] = $('[name="lastName"]');
	 elementHandle[2] = $('[name="middleName"]');
    elementHandle[3] = $('[name="address"]');
    elementHandle[4] = $('[name="city"]');
    elementHandle[5] = $('[name="state"]');
    elementHandle[6] = $('[name="zipcode"]');
    elementHandle[7] = $('[name="area_phone"]');
    elementHandle[8] = $('[name="prefix_phone"]');
    elementHandle[9] = $('[name="phone"]');
    elementHandle[10] = $('[name="email"]');
	 elementHandle[11] = $('[name="gender"]');
	 elementHandle[12] = $('[name="DOB"]');
	 elementHandle[13] = $('[name="medicalCondition"]');
	 elementHandle[14] = $('[name="experianceLevel"]');
	 elementHandle[15] = $('[name="ageGroup"]');
	 elementHandle[16] = $('input[name="user_pic"]');
	
	elementHandle[0].focus();
	
	var size=0;
	$(elementHandle[16]).on('change',function(e) {
		size = this.files[0].size;
	});
		
    function isValidData() {
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();            
            return false;
            }
        if(isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[3].focus();            
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[4].focus();            
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[5].focus();            
            return false;
            }
        if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[5].focus();            
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[6].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }
        if(elementHandle[6].val().length !=5) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[6].focus();            
            return false;
            }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[7].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
        if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[7].focus();            
            return false;
            }   
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[8].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }
        if(elementHandle[8].val().length != 3) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[8].focus();            
            return false;
            }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[9].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[9].focus();            
            return false;
            }
        if(elementHandle[9].val().length != 4) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[9].focus();            
            return false;
            }  
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your email address");
            elementHandle[10].focus();            
            return false;
            }            
        if(!isValidEmail(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[10].focus();            
            return false;
            }     
		  if(!checkGender()) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("Please select your gender");
            elementHandle[11].focus();            
            return false;
            } 
		  if(!isValidDate(elementHandle[12].val())) {
				elementHandle[12].addClass("error");
				errorStatusHandle.text("Please enter valid date of birth");
				elementHandle[12].focus();
				return false;
			}
		 	if(!checkExperiance()) {
				elementHandle[14].addClass("error");
				errorStatusHandle.text("Please select your experiance level");
				elementHandle[14].focus();
				return false;
			}
			if(!checkAgeGroup()) {
				elementHandle[15].addClass("error");
				errorStatusHandle.text("Please select your age group");
				elementHandle[15].focus();
				return false;
			} 
		 	if(size == 0) {
				elementHandle[16].addClass("error");
				errorStatusHandle.text("Please select a file");
				elementHandle[16].focus();
				return false;
				}
		 	 if(size/1000 > 1000) {
				elementHandle[16].addClass("error");
				errorStatusHandle.text("File is too big, 1 MB max");
				elementHandle[16].focus();
				return false;
				}
        return true;
        }       

   
	
// on blur, if the user has entered valid data, the error message
// should no longer show.
	 elementHandle[0].on('blur', function() {
		  if(isEmpty(elementHandle[0].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[1].on('blur', function() {
		  if(isEmpty(elementHandle[1].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[3].on('blur', function() {
		  if(isEmpty(elementHandle[3].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[4].on('blur', function() {
		  if(isEmpty(elementHandle[4].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[5].on('blur', function() {
		  if(isEmpty(elementHandle[5].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[6].on('blur', function() {
		  if(isEmpty(elementHandle[6].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[7].on('blur', function() {
		  if(isEmpty(elementHandle[7].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[8].on('blur', function() {
		  if(isEmpty(elementHandle[8].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	elementHandle[8].on('blur', function() {
		  if(isEmpty(elementHandle[8].val()))
				return;
		  $(this).removeClass("error");
		  errorStatusHandle.text("");
	 });
	
	
	
    elementHandle[10].on('blur', function() {
        if(isEmpty(elementHandle[10].val()))
            return;
        if(isValidEmail(elementHandle[10].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        }); 
	 elementHandle[11].on('blur', function() {
        if(!checkGender())
            return;
        if(checkGender()) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        }); 
	
	elementHandle[12].on('blur', function() {
        if(isValidDate())
            return;
        if(!isValidDate()) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });
	elementHandle[14].on('blur', function() {
        if(!checkExperiance())
            return;
        if(checkExperiance()) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        }); 
	elementHandle[15].on('blur', function() {
        if(!checkAgeGroup())
            return;
        if(checkAgeGroup()) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });       

    elementHandle[5].on('keyup', function() {
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
        });
        
    elementHandle[7].on('keyup', function() {
        if(elementHandle[7].val().length == 3)
            elementHandle[8].focus();
            });
            
    elementHandle[8].on('keyup', function() {
        if(elementHandle[8].val().length == 3)
            elementHandle[9].focus();
            });            

    $(':submit').on('click', function() {
        for(var i=0; i < 11; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        return isValidData();
        });
        
    $(':reset').on('click', function() {
        for(var i=0; i < 11; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        });                                       
});