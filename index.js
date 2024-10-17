// 36 + 1 (0) = 37 miejsc na tabeli

const ruleta = document.getElementById("krecidlo");
var result = 0;
const onRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const onBlack = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

function krync() {
	result = Math.floor(Math.random() * 37);
	ruleta.className = "spin";

	setTimeout(shit, 5000);
}

function shit() {
	if (!result) ruleta.className = "";
	else if (onRed.includes(result)) ruleta.className = "getRed";
	else if (onBlack.includes(result)) ruleta.className = "getBlack";
}