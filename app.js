function myfunc(){
    document.getElementById("studentdetails").style.display="none";
    document.getElementById("studentcard").style.display="block";
    var name=document.getElementById("name").value;
    var school=document.getElementById("school").value;
    var date=document.getElementById("date").value;
    var image=document.getElementById("image").value;
    document.getElementById("username").innerHTML=name;
    document.getElementById("userstud").innerHTML=school;
    document.getElementById("userborn").innerHTML=date;
    document.getElementById("userimage").src=image;


}




























