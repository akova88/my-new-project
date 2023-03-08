// alert("Hi Javascrip basic!")
// function showMessage () {
//     alert('Xin chao!');
// }

// function showMessage() {
//     document.getElementById('messegeDiv').innerHTML= 'Xin chào!';
// }

// function showMessage() {
//     document.write('Xin chao');
// }

// function showMessage() {
//     console.log('Xin chào');
// }

// let i = 10;
// let f = 20.5;
// let b = true;
// let s = 'Hà Nội';

// document.write('i = ' + i);
// document.write('</br>');
// document.write('f = ' + f);
// document.write('</br>');
// document.write('b = ' + b);
// document.write('</br>');
// document.write('s = ' + s);

// let width = 20;
// let height = 10;
// let area = width * height;

// document.write('Diện tích Area=' + area);

// let a = prompt('Nhap so a:',);
// let b = prompt('Nhap so b',);
 

//  function divisor() {
//     let c = a % b;
//     if (c == 0) {
//     alert('a la boi so cua b');
// } else {alert('a ko phai la boi so cua b');}
// }
// divisor(a,b);

/** Viết ứng dụng tính diện tích hình chữ nhật 

let inputWidth = prompt('Enter the width:');
let inputHeight = prompt('Enter the height:');
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;
document.write("The area is:" + area);
*/

/**Thực hành khai báo và sử dụng biến 
// Bài 1: Tính điểm trung bình

let inputDiemly = prompt('Nhập điếm môn Lý:');
let inputDiemhoa = prompt('Nhập điểm môn Hóa:');
let inputDiemsinh = prompt('Nhập điểm môn Sinh:');

let diemly = parseInt(inputDiemly);
let diemhoa = parseInt(inputDiemhoa);
let diemsinh = parseInt(inputDiemsinh);

let sumDiem = diemhoa + diemly + diemsinh;
let diemTb = sumDiem / 3;

document.write("Tổng điểm các môn học là:" + sumDiem);
document.write("</br>");
document.write("Điểm trung bình các môn học là:" + diemTb);


// Bài 2: Viết chương trình đổi độ C ra độ F

let inputNhietdo = prompt('Nhập giá trị độ C:');
let doC = parseInt(inputNhietdo);

let doF = (9 * doC) / 5 + 32;

document.write('Độ F là:' + doF);


// Bài 3: Viết chương trình tính diện tích hình tròn

let inputRadius = prompt('Nhập bán kính hình tròn:');
let radius = parseInt(inputRadius);

let area = radius * radius * Math.PI;

document.write('Diện tích hình tròn là:' + area);

*/

// Hàm chuyển đổi tiền tệ
function changeMoney() {
   
let Amount = document.getElementById('amount').value;
let f = document.getElementById("fromC").value;
let to = document.getElementById('toC').value;
let ketqua;

    if (f == "VND" && to == "USD") {
        ketqua = Amount / 23000 + "$";
    } else if (f == "USD" && to == "VND") {
        ketqua = Amount * 23000 + "Đ";
    } else if (f == "VND") {
        ketqua = Amount + "Đ";
    } else {
        ketqua = Amount + "$"
    }

document.write('Kết quả là:' + ketqua);
}

