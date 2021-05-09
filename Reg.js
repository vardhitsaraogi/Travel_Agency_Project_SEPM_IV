//login
/*var*/let objPeople=[
  {
   un: "vardhit",
   pwd: "1234",
   em: "vs9249@srmist.edu.in"
   },
   {
   un: "kanishk",
   pwd: "4321",
   em: "ss6344@srmist.edu.in"
   },
  {
   un: "sagar",
   pwd: "5678",
   em: "kg4571@srmist.edu.in"
   },
   ]
   /*localStorage.setItem('objPeople', JSON.stringify([
    {
     un: "vardhit",
     pwd: "1234",
     em: "vs9249@srmist.edu.in"
     },
     {
     un: "kanishk",
     pwd: "4321",
     em: "ss6344@srmist.edu.in"
     },
    {
     un: "sagar",
     pwd: "5678",
     em: "kg4571@srmist.edu.in"
     },
     ]));*/
     //var objPeople = JSON.parse(localStorage.getItem('objPeople'));
   //localStorage.setItem('objPeople', JSON.stringify(objPeople));
//let objPeople=[]
  function getInfo()
  {
    //objPeople=localStorage["key"]    
    var objPeople = JSON.parse(localStorage.getItem('objPeople'));
    if(objPeople==null)
  {
  localStorage.setItem('objPeople', JSON.stringify([
    {
     un: "vardhit",
     pwd: "1234",
     em: "vs9249@srmist.edu.in",
     nm: "Vardhit Saraogi",
     dob:"02/11/2000",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
     {
     un: "kanishk",
     pwd: "4321",
     em: "ss6344@srmist.edu.in",
     nm: "Kanishk Gaur",
     dob:"15/11/2000",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
    {
     un: "sagar",
     pwd: "5678",
     em: "kg4571@srmist.edu.in",
     nm: "Sagar Sharda",
     dob:"29/07/2001",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
     ]));
     var objPeople = JSON.parse(localStorage.getItem('objPeople'));
  }
  var un=document.getElementById("un").value
  var pwd=document.getElementById("pwd").value
  var u=localStorage["use"]
  if(u==null || u=="")
  {
  for(i=0;i<objPeople.length;i++)
  {
  if(un==objPeople[i].un && pwd==objPeople[i].pwd)
  {
  alert("Welcome "+un+"! You are now logged in!")
  localStorage["use"]=un
  localStorage["name"]=objPeople[i].nm
  var red =localStorage["redirect"]
  if(red==null||red==0)
  {
    localStorage["redirect"]=0
    window.location.href="Home.html";
  }
  else if(red==1)
  {
    window.location.href="Cart.html";
  }
  /*else{
  window.location.href="Home.html";}*/
  return
  }
  }
  alert("Incorrect pin or username")
  }
  else
  {
    alert(u+" is logged in! You cannot login until they log out!")
  }
}
  function mouseoverPass1l(obj) {
    var obj = document.getElementById('pwd');
    obj.type = "text";
  }
  function mouseoutPass1l(obj) {
    var obj = document.getElementById('pwd');
    obj.type = "password";
  }
  function clearedl() {
    document.getElementById("un").value = "";
    document.getElementById("pwd").value = "";
    alert("Cleared!")
  }

  //sign-up
/*function getInfo1()
{
var un=document.getElementById("un").value
var pwd=document.getElementById("pwd").value
for(i=0;i<objPeople.length;i++)
{
if(un==objPeople[i].un && pwd==objPeople[i].pwd)
{
alert("Welcome "+un+"! You are now logged in!")
window.location.href="Home.html";
return
}
}
alert("Incorrect pin or username")
}*/
function regUser()
{
 // objPeople=localStorage["key"]
var reguser=document.getElementById("nUser").value
var regpass=document.getElementById("nPass").value
var cpass=document.getElementById("cPass").value
var nam1=document.getElementById("nam").value
var dob1=document.getElementById("dob").value
var eml=document.getElementById("em").value
    var flag=1
    for(i=0;i<eml.length;i++)
    {
    if(eml.charAt(i)=='@')
    {
    flag=0
    }
    }
    if(flag==1)
    alert("Not valid mail id")
    else
    {
if(document.getElementById("ml").checked)
{
  var gen="Male"
}
else if(document.getElementById("fml").checked)
{
  var gen="Female"
}
else{
  var gen="Prefer not to mention"
}
var nuser=
{
un: reguser,
pwd: regpass,
em: eml,
nm: nam1,
dob: dob1,
sex: gen,
sum: 0,
trans: 0,
city: ""
}
//localStorage.setItem('objPeople', JSON.stringify(objPeople));
var objPeople = JSON.parse(localStorage.getItem('objPeople'));
if(objPeople==null)
  {
  localStorage.setItem('objPeople', JSON.stringify([
    {
     un: "vardhit",
     pwd: "1234",
     em: "vs9249@srmist.edu.in",
     nm: "Vardhit Saraogi",
     dob:"02/11/2000",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
     {
     un: "kanishk",
     pwd: "4321",
     em: "ss6344@srmist.edu.in",
     nm: "Kanishk Gaur",
     dob:"15/11/2000",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
    {
     un: "sagar",
     pwd: "5678",
     em: "kg4571@srmist.edu.in",
     nm: "Sagar Sharda",
     dob:"29/07/2001",
     sex: "Male",
     sum: 0,
     trans: 0,
     city: ""
     },
     ]));
     var objPeople = JSON.parse(localStorage.getItem('objPeople'));
  }
for(i=0;i<objPeople.length;i++)
{
if(reguser==objPeople[i].un)
{
alert("Username already taken")
return
}
}
if(reguser.length==0||regpass.length==0)
alert("Invalid username or password!")
else if(regpass!=cpass)
alert("Passwords do not match!")
else
{
  alert("Successfully Registered!")
objPeople.push(nuser)
//localStorage["key"]=objPeople
localStorage.setItem('objPeople', JSON.stringify(objPeople));
window.location="Login.html";
}
}
}
function mouseoverPass1s(obj) {
  var obj = document.getElementById('nPass');
  obj.type = "text";
}
function mouseoutPass1s(obj) {
  var obj = document.getElementById('nPass');
  obj.type = "password";
}
function mouseoverPass2s(obj) {
  var obj = document.getElementById('cPass');
  obj.type = "text";
}
function mouseoutPass2s(obj) {
  var obj = document.getElementById('cPass');
  obj.type = "password";
}
function cleareds() {
  document.getElementById("cPass").value = "";
  document.getElementById("nPass").value = "";
  document.getElementById("nUser").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("nam").value = "";
  document.getElementById("em").value = "";
  document.getElementById("ml").checked = false;
  document.getElementById("fml").checked = false;
  document.getElementById("not").checked = false;
  alert("Cleared!")
}
function del()
{
  var objPeople = JSON.parse(localStorage.getItem('objPeople'));
  var dun=document.getElementById("delun").value
  var dpwd=document.getElementById("delpwd").value
  for(i=0;i<objPeople.length;i++)
{
if(dun==objPeople[i].un && dpwd==objPeople[i].pwd)
{
  /*delete objPeople[i].un;
  delete objPeople[i].pwd;
  objPeople.remove();*/
  objPeople.splice(i, 1);
  localStorage.setItem('objPeople', JSON.stringify(objPeople));
alert("User deleted!")
return
}
}
alert("User Doesnt Exist or Incorrect Password!")
}
function dis()
{
for(i=0;i<objPeople.length;i++)
{
alert(objPeople[i].un)
alert(objPeople[i].pwd)
}
}