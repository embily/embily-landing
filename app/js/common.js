var element = document.querySelectorAll('.phone-mask');
var maskOptions = {
  mask: '+{1}(000)000-00-00'
};
for (var i = 0; i < element.length; i++){
  var mask = IMask(element[i], maskOptions);
}

var element2 = document.querySelectorAll('.email-mask');
var maskOptions2 = {
  mask: /^\S*@?\S*$/
};
for (var i = 0; i < element2.length; i++){
  var mask = IMask(element2[i], maskOptions2);
}