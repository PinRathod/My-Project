function fun()
{ 
  var val=document.getElementById("sname").value;
  var text=document.getElementById("quote").value;
  var regex=/^[ A-Za-z0-9_ ,.;:/-]*$/;

  if(val=="" && text=="")
  {
    document.getElementById("error").style.display="block";
    document.getElementById("error1").style.display="block";
    document.getElementById("p1").innerHTML="Fields can not be blank!";
    document.getElementById("p2").innerHTML="Fields can not be blank!";
    document.getElementById("sname").style.border="solid 1px red";        
    document.getElementById("quote").style.border="solid 1px red";        
    document.getElementById("success").style.display="none";
    document.getElementById("success1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.color="red";
  }
  else if(val=="")
  {
    document.getElementById("error").style.display="block";
    document.getElementById("p1").innerHTML="Fields can not be blank!";
    document.getElementById("sname").style.border="solid 1px red";        
    document.getElementById("success").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.color="red";
  }
  else if(text=="")
  {
    document.getElementById("error1").style.display="block";
    document.getElementById("p2").innerHTML="Fields can not be blank!";
    document.getElementById("quote").style.border="solid 1px red";        
    document.getElementById("success1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.color="red";
  }
  else if(!val.match(regex))
  {
    document.getElementById("error").style.display="block";
    document.getElementById("p1").innerHTML="Only alphanumeric string accepted!";
    document.getElementById("sname").style.border="solid 1px red";        
    document.getElementById("success").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.color="red";
  }

  else if(!text.match(regex))
  {
    document.getElementById("error1").style.display="block";
    document.getElementById("p2").innerHTML="Only alphanumeric string accepted!";
    document.getElementById("quote").style.border="solid 1px red";        
    document.getElementById("success1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.color="red";
  }
  else
  {
    document.getElementById("p2").style.color="green";
    document.getElementById("success").style.display="block";
    document.getElementById("success1").style.display="block";
    document.getElementById("p2").innerHTML="Valid Quote!";
    document.getElementById("sname").style.border="solid 1px green";        
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
    document.getElementById("error").style.display="none";
    document.getElementById("error1").style.display="none";
    document.getElementById("quote").style.border="solid 1px green";        
  }

}

