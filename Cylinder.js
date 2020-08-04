const calcVolume = document.querySelector('.findVolume');
const rad =document.querySelector('.rad');
const hgt = document.querySelector('.hgt');
const answer = document.querySelector('.volVal')
const container = document.querySelector('.container')

calcVolume.addEventListener('click', function findTheVolume(){
	if(!isNaN(rad.value) && !isNaN(hgt.value)){
	answer.innerHTML = rad.value * rad.value * hgt.value * 3.143 + "cm";
	answer.style.color = 'green'}
	 else{
		answer.innerHTML = 'Please input numbers Only!'
		answer.style.color = "red"

	 }

})