let remove = document.querySelector('button');
let parent = document.querySelector('#box');
function myFunction() {
  const element = document.getElementById("1");
  element.remove();
}
function myFunction2() {
  const element = document.getElementById("2");
  element.remove();
}
function myFunction3() {
  const element = document.getElementById("3");
  element.remove();

}
function myFunction4() {
  const element = document.getElementById("4");
  element.remove();
}
function myFunction5() {
  const element = document.getElementById("5");
  element.remove();
}
function myFunction6() {
  const element = document.getElementById("6");
  element.remove();
}
function myFunction7() {
  const element = document.getElementById("7");
  element.remove();
}
function myFunction8() {
  const element = document.getElementById("8");
  element.remove();
}
function myFunction9() {
  const element = document.getElementById("9");
  element.remove();
}
function myFunction10() {
  const element = document.getElementById("10");
  element.remove();
}
function myFunction11() {
  const element = document.getElementById("11");
  element.remove();
}
function myFunction12() {
  const element = document.getElementById("12");
  element.remove();
}
function disp(){
  for(let i=1;i<13;i++){

    const exten =document.getElementById([i]);
    const check ="switchCheckDefault";
    const x = [i];
    const checks = check+x;
    const checkid=document.getElementById(checks);
   if(checkid.checked){
   exten.style.display='none';
}
else{
   exten.style.display='block';

  }}
};
function disp2(){
  for(let i=1;i<13;i++){

    const exten =document.getElementById([i]);
    const check ="switchCheckDefault";
    const x = [i];
    const checks = check+x;
    const checkid=document.getElementById(checks);
   if(checkid.checked){
   exten.style.display='block';
}
else{
   exten.style.display='none';

  }}
};
function disp3(){
  for(let i=1;i<13;i++){

    const exten =document.getElementById([i]);
    const check ="switchCheckDefault";
    const x = [i];
    const checks = check+x;
    const checkid=document.getElementById(checks);
   if(checkid){
   exten.style.display='block';
}
}};
