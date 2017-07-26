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
/* 
list.addEventListener('click',function(){
    str = e.target.dataset;
    console.log('農夫標號是'+num);
    console.log('有'+dog+'隻狗');
},false);
*/
sed.addEventListener('click',updateList,false);
/* 
function checkList(e){
  var num = e.target.dataset.num;
  // console.log(e.target.nodeName);
  if(e.target.nodeName !== 'LI'){return};
  country.splice(num,1);
  updateList();
}
list.addEventListener('click',checkList,false);
*/