var country = [];
var el = document.querySelector('.list');
var sed = document.querySelector('.send');
//var list = document.querySelector('.text');
var str = '';


function updateList(){
  
  var len = country.length;
  for(var i = 0;len>i;i++){
    str+='<li data-num="'+i+'">'+country[i]+'</li>'
   
  }
  country.push(str);
  el.innerHTML = str;
  
}
sed.addEventListener('click',updateList,false);
