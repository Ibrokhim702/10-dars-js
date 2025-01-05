// const num1 = +prompt("Birinchi raqamni kiriting");
// const num2 = +prompt("Ikkinchi raqamni kiriting");
// const answer = +prompt("Iltimos tanlang: \n 1) + \n 2) - \n 3) * \n 4) /");

// let result;

// if (answer === 1) {
//     result = num1 + num2;
// } else if (answer === 2) {
//     result = num1 - num2;
// } else if (answer === 3) {
//     result = num1 * num2;
// } else if (answer === 4) {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         alert("Nolga bo'lish mumkin emas!");
//         result = "Noto'g'ri amal";
//     }
// } else {
//     alert("Noto'g'ri tanlov qilindi!");
//     result = "Noto'g'ri amal";
// }

// if (result !== "Noto'g'ri amal") {
//        const resultElement = document.createElement("h1");
//     resultElement.textContent = `Javob: ${result}`;
//     document.body.appendChild(resultElement);   
//     alert(`Javob: ${result}`);


// const newTag = document.createElement("h1");
// const newTag2 = document.createElement("strong");

// newTag2.textContent = "Satrong Salom";
// newTag.textContent = "Salom createElement";

// newTag.style.backgroundColor = "red";
// document.body.style.backgroundColor = "blue";

// document.body.append(newTag,newTag2);


// const newTag = document.createElement("div");
// const newTag2 = document.createElement("div");
// const newTag3 = document.createElement("div");
// const newTag4 = document.createElement("div");

// newTag.style.backgroundColor = "black"
// newTag.style.width = "300px"

// newTag2.style.backgroundColor = "red";
// newTag2.style.width = "200px";
// newTag2.style.height = "200px"
// newTag2.style.borderRadius = "50%";

// newTag3.style.backgroundColor = "yellow";
// newTag3.style.width = "200px";
// newTag3.style.height = "200px"
// newTag3.style.borderRadius = "50%";

// newTag4.style.backgroundColor = "green";
// newTag4.style.width = "200px";
// newTag4.style.height = "200px"
// newTag4.style.borderRadius = "50%";


// newTag.append(newTag2,newTag3,newTag4);

// document.body.append(newTag);



const userName = prompt("Ismingizni kiriting");
const newTag = document.createElement("h1");


newTag.textContent = userName;
document.body.append(newTag);

newTag.className = "title"








