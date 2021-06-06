function age_input()
{
  var age=prompt('Enter your age');
  let h1=document.createElement('h1');
  h1.setAttribute("id","ageCalc");
  let res=age*365;
  let text=document.createTextNode('Your age in days is  '+ res);
  h1.appendChild(text);
document.getElementById("result").appendChild(h1);
}
function reset()
{
  document.getElementById("ageCalc").remove();
}
