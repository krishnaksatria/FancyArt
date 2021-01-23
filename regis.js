function addressCheck(a)
{
    var i;
    var sum=0;
    for (i=0; i<a.length; i++)
    {
        if(a[i]==" "){
            sum++;
        }
    }
    if(sum>=4 && sum<12){
        return true;
    }
    return false;
}

function submitBtn(){
    var user = document.forms["regisContainer"]["name"].value;
    var mail = document.forms["regisContainer"]["email"].value;
    var password1 = document.forms["regisContainer"]["pass1"].value;
    var password2 = document.forms["regisContainer"]["pass2"].value;
    var nation = document.forms["regisContainer"]["country"].value;
    var pref1 = document.getElementById("Renaissance").checked;
    var pref2 = document.getElementById("Cubism").checked;
    var pref3 = document.getElementById("Abstract").checked;
    var pref4 = document.getElementById("Traditional").checked;
    var pref5 = document.getElementById("Impressionism").checked;
    var pref6 = document.getElementById("Surrealism").checked;
    var add = document.forms["regisContainer"]["address"].value;
    var fcheck = document.forms["regisContainer"]["validate"].checked;
    var len = mail.length;
    var cek = 1;
    for(var i=0 ; i<len ; i++){
        // document.getElementById("result").innerHTML= mail[i];
        if(mail[i] != '@') cek = 1;
        else{
            cek = 0;
            break;
        }
    }
    if(user==null||user.length<5){
        document.getElementById("result").innerHTML = "Name Must Be Minimal 5 Character length"
    }
    else if(cek == 1){
        document.getElementById("result").innerHTML = "You input wrong email"
    }
    else if(password1 != password2){
        document.getElementById("result").innerHTML = "The Confirmation Password didn't match"
    }
    else  if(pref1==false && pref2==false && pref3==false && pref4==false && pref5==false && pref6==false){
        document.getElementById("result").innerHTML = "Art Preference Must Be choosen"
    }
    else if(addressCheck(add)==false){
        document.getElementById("result").innerHTML = "Address must be minimal 5 words long";
    }
    else  if(fcheck==false){
        document.getElementById("result").innerHTML = "You didn't agree for the Terms and Conditions"   
    }
    else{
        var preferences;
        if(pref1 == true){
            preferences="Renaissance";
        }
        else if(pref2 == true){
            preferences="Cubism";
        }
        else if(pref3 == true){
            preferences="Abstract";
        }
        else if(pref4 == true){
            preferences="Traditional";
        }
        else if(pref5 == true){
            preferences="Impressionism";
        }
        else{
            preferences="Surrealism";
        }

        alert(' Name :  '+user+'\n Email : '+mail+'\n Password : '+password1+'\n Country : '+nation+'\n Art Preferences : '+preferences+'\n Address : '+add)

        y();

        window.location.href='Homepage.html';
    }
}

function y(){
    alert("Thankyou for your registration!")
}

function resetBtn(){
    document.getElementById("frm1").reset();
    location.reload(); 
    alert("Form Resetted");
   
}