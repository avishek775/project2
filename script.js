const form = document.querySelector('form')

//this usecase will give you empty
//const height= parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(event){
event.preventDefault()
const height= parseInt(document.querySelector('#height').value);
const weight= parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');


if(height===''||height<0|| isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;
}

else if(weight===''||weight<0|| isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
}

else{
const bmi=(weight/((height*height)/10000)).toFixed(2)
//show the result



 let Category;
if(bmi<18.6){
    Category='underweight';
}

else if(bmi>=18.6 && bmi<24.9){
    Category='normalweight';
}
else if(bmi>=24.9 && bmi<30){
    Category='overweight';
}

results.innerHTML =`<span>${bmi} ${Category}</span>`
}
});