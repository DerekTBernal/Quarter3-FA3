var num1 = Math.floor(Math.random() * 21);
var num2 = Math.floor(Math.random() * 21);
var num3 = Math.floor(Math.random() * 21);

apple_count.innerHTML = num1;
banana_count.innerHTML = num2;
orange_count.innerHTML = num3;

var timeHours = Math.floor(num2 * num3 / 60);
var timeMinutes = (num2 * num3) % 60;
var mostLikedFruit;
var maxLikes = Math.max(num1, num2, num3);

if (maxLikes === num1) {
    mostLikedFruit = "Apple";
} else if (maxLikes === num2) {
    mostLikedFruit = "Banana";
} else {
    mostLikedFruit = "Orange"
}

out1.innerHTML += ` ${mostLikedFruit} with ${maxLikes} people. Those people got a prize too.`;
out2.innerHTML += getLetterFromNumber(num1) + ".";
out3.innerHTML += `${mostLikedFruit.toLowerCase()} was ${timeHours} hours and ${timeMinutes} mins.<br>(${num2 * num3} minutes)`

if (num2 * num3 === 0) {
    out3.innerHTML += "<br>He wasn't even able to cook... They quickly got kicked out."
} else if (num2 * num3 > 30) {
    out3.innerHTML += "<br>People had to wait too long... All of them left in the end."
} else {
    out3.innerHTML += "<br>They got it in the end, and it was quite delicious. They got a prize as a reward."
}

function getLetterFromNumber(x) {
    var stringRef = "aabcdefghijklmnopqrstuvwxyz";
    return stringRef[x];
}