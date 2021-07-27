//1&2
var name="alireza jafari";
var email1="ar.jafari83@gmail.com";
var pattren1=/@gmail.com$/g
var pattren=/^alireza/g
console.log(pattren.test(name))
console.log(pattren1.test(email1))
 
//3
var email2 ="ar1.jafari83@gmail.com"
var pattern2 =/^ar\D/
console.log(pattern2.test(email2))
//4
var email3 ="ar .jafari83@gmail.com"
var pattern3 =/^ar\s/
console.log(pattern3.test(email3))
//5
var email4 ="ar.jafari83@gmail.com"
var pattern4 =/^ar+h+/
console.log(pattern4.test(email4))
//6

var email5 ="ar.jafari83@gmail.com"
var pattern5 =/[a-z0-9]+\.+[a-z0-9]+\@+[a-z]+\.+[a-z]/
console.log(pattern5.test(email5))

//7

var email6 ="ar.jafari83gmail.com"
var pattern6= new RegExp('jafari')
console.log(pattern6.test(email6))
