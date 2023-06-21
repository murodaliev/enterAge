var person = +prompt("Iltimos o'z yoshingizni kiriting va bizning maslahatlarni oling");
if(person > 0 && person <= 18){
    alert("Yoshsiz. O'qishingiz kerak");
} else if(person > 18 && person <= 50){
    alert("Ishlashingiz kerak");
} else if(person > 50 && person <= 59){
    alert("Yaqinda pensiyaga chiqasiz");
} else if(person > 59 && person <= 150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'sangiz :) ")
} else {
    alert("Nimadir noto'g'ri ketib qoldi");
}
