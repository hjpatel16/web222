function validateForm(frm)
{
    return validatelname(frm) && validatePhoneNumber(frm) && validatefname(frm) && validatepassword(frm) && validateSelect(frm);
}

function validatelname(frm)
{
    var pass = false;
    var alp = false;
    var String = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allowcharacters = /[^/a-z/A-Z/'-/]/;
    var value = frm.lname.value.trim();

    if (value.length == 0)
    {
        alert("No input!\n");
        return false;
    }
    
    for (var i = 0; i < value.length; i++)
    {
        if (String.indexOf(value.substr(i, 1)) >= 0)
            {
            pass = true;
        }
    }  

    if (!pass)
    {
        alert("First Name should have at least one Alphabet letter.");
        frm.lname.focus();
        return false;
    }

    if (allowcharacters.test(value))
    {
        alert("Please enter allowable characters in first name");
        return false;
    }
    
    return true;
}
function validatelname(frm) {
    var pass = false;
    var alp = false;
    var String = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allowcharacters = /[^/a-z/A-Z/'-/]/;
    var value = frm.fname.value.trim();

    if (value.length == 0) {
        alert("No input!\n");
        return false;
    }

    for (var i = 0; i < value.length; i++) {
        if (String.indexOf(inputvalue.substr(i, 1)) >= 0) {
            pass = true;
        }
    }

    if (!pass) {
        alert("last Name should have at least one Alphabet letter.");
        frm.fname.focus();
        return false;
    }

    if (allowcharacters.test(value)) {
        alert("Please enter allowable characters in last name");
        return false;
    }

    return true;
}

function validatePhoneNumber()
{

    input = signup.phone.value.trim();

    if (input.length == 0)
    {
        alert("Please enter a phone number");
        signup.phone.focus();
        return false;
    }

    if (input.length != 10)
    {
        alert("Please enter 10 digits");
        signup.phone.focus();
        return false; 
    }

    if (parseInt(input) != input)
    {
        alert('Please enter a phone number, numbers only');
        signup.phone.focus();
        return false; 
    }
    var er = /^000/;

    if (er.test(input))
    {
        alert('Please enter a phone number not having area code 000');
        signup.phone.focus();
        return false;
    }

    er = /0000000000/;
    if (er.test(input))
    {
        alert('Please enter a valid phone number');
        signup.phone.focus();
        return false;
    }
    return true; 

}

function validatepassword(frm)
{
    var pass1 = signup.pass1.value.trim();
    var pass2 = signup.pass2.value.trim();
    var pa = /[a-z]/;
    var pA = /[A-Z]/;
    var num = /[0-9]/;
    var pass = false;
    
    if(pass1.length == 0)
    {
        alert("Please enter a password");
        signup.pass1.focus();
        return false;
    }

    if (pass1.length < 8)
    {
        alert("Password must be atleast 8 characters long!!!");
        signup.pass1.focus();
        return false;
    }

    if (!pa.test(pass1))
    {
        alert("Password must contain atleast one lower case character");
        signup.pass1.focus();
        return false;
    }

    if (!pA.test(pass1))
    {
        alert("Password must contain atleast one upper case character");
        signup.pass1.focus();
        return false;
    }

    if (!num.test(pass1))
    {
        alert("Password must contain atleast one number");
        signup.pass1.focus();
        return false;
    }

    if (pass1 != "" && pass1 != pass2)
    {
        alert("Your passwords doenst match!!!!");
        signup.pass1.focus();
        return false;
    }

 
    return true;
}

function validateSelect(frm)
{
    var checked = false;

    var radlen = document.signup.typ.length;

    for(i=0;i<radlen;i++)
    {
        if(document.signup.typ[i] == true)
        {
            checked = true;
        }
    }

    if(!checked)
    {
        alert("Must select atleast field ");
        return false;
    }
    return true;
}