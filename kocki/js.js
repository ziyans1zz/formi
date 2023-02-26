
//274
// let hui = document.querySelector('#hui');
// let hui2 = document.querySelector('#hui2');
// hui.addEventListener("blur", area)
// function area() {
//     hui2.textContent = hui.value
// }



// 275 (1)
// let hui = document.querySelector('#hui');
// let ban = document.querySelector("#ban")
// ban.addEventListener("click", wow);
// function wow() {
//     hui.disabled = true
// }






// 275 (2)

// let hui = document.querySelector('#hui');
// let ban = document.querySelector("#ban");
// let unban = document.querySelector("#unban");
// ban.addEventListener("click", daban);
// function daban() {
//     hui.disabled = true
// }
// unban.addEventListener("click", netban);
// function netban(){
//     hui.disabled = false
// }



// 275 (3)

// let hui = document.querySelector('#hui');
// let lol = document.querySelector("#lol");
// lol.addEventListener("click", search);
// function search() {
//    console.log(hui.disabled)
// }




// 276 (1)

// let kek = document.querySelector('#kek');
// let lol = document.querySelector('#lol');
// let hui = document.querySelector('#hui');

// lol.addEventListener("click", qwe)
// function qwe(){
//     hui.checked = true;
// }
// kek.addEventListener("click", ewq)
// function ewq(){
//     hui.checked = false;
// }



// 276 (2)

// let kek = document.querySelector('#kek');
// let lol = document.querySelector('#lol');
// let hui = document.querySelector('#hui');

// lol.addEventListener("click", qwe)
// function qwe(){
//     let a = hui.checked
//     if (a<true) {
//         kek.textContent = "пока";
//     }
//     else{
//         kek.textContent = "привет";
//     } 
// }


//277 
// let hui   = document.querySelector('#hui');
// let lol = document.querySelector('#lol');

// lol.addEventListener('click', function() {
// 	if (hui.disabled) {
// 		hui.disabled = false;
// 	} else {
// 		hui.disabled = true;
// 	}
// });




// 278
// let hui = document.querySelectorAll('input[type="radio"]');
// let lol = document.querySelector('#lol');
// let kek = document.querySelector('p');
// lol.addEventListener('click', function() {
// 	for (let radio of hui) {
// 		if (radio.checked) {
//             radio.checked = true
//             kek.textContent = +radio.value
// 		}
       
// 	}
// });