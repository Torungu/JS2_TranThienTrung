//GLOBAL
var newFormat= Intl.NumberFormat('Vn-vn');
/*
BÀI TẬP 1:TÍNH LƯƠNG NHÂN VIÊN
-Input:
+a: số ngày nhập
+luongNgay: 100,000
-Process:
+b=a*luongNgay
-Output:
+salary
*/
document.getElementById('tinh').onclick=function(){
    var a = document.getElementById('soNgaylam').value*1;
    const luongNgay=100000;
    var b = a*luongNgay;
    var ketQua= "Tiền lương khi làm việc trong "+a+" ngày là "+newFormat.format(b);
    document.getElementById('salary').innerHTML=ketQua;
}

/*
BÀI TẬP 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ
-Input:
+num1,num2,num3,num4,num5: 5 số cần nhập
-Process:
+trungBinh=(num1+num2+num3+num4+num5)/5
-Output:
+avg
*/
document.getElementById('trungBinh').onclick=function(){
    var num1=document.getElementById('num1').value*1;
    var num2=document.getElementById('num2').value*1;
    var num3=document.getElementById('num3').value*1;
    var num4=document.getElementById('num4').value*1;
    var num5=document.getElementById('num5').value*1;
    var trungBinh=(num1+num2+num3+num4+num5)/5;
    var ketQua="Giá trị trung bình của 5 số trên là "+trungBinh;
    document.getElementById('avg').innerHTML=ketQua;
}

/*
BÀI TẬP 3: QUY ĐỔI TIỀN
-Input:
+USD= số tiền muốn đổi
+1 USD = 23,500 VNĐ
-Process:
+VND=USD*23,500
-Output:
+VND 
*/
document.getElementById('exchange').onclick=function(){
    var USD=document.getElementById('USD').value*1;
    const quyDoi=23500;
    var VND=USD*quyDoi;
    VND=newFormat.format(VND);
    var ketQua= USD+" USD = "+VND+ " VNĐ";
    document.getElementById('VND').innerHTML=ketQua;
}

/*
BÀI TẬP 4: TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
-Input:
+a:chiều dài
+b:chiều rộng
-Process:
+Chu vi: cV=(a+b)*2
+Diện tích: dT=a*b
-Output:
+cV,dT
*/
document.getElementById('result').onclick=function(){
    var chieuDai=document.getElementById('chieuDai').value*1;
    var chieuRong=document.getElementById('chieuRong').value*1;
    var cV = (chieuDai+chieuRong)*2;
    var dT=chieuDai*chieuRong;
    var ketQua="Chu vi và diện tích của hình chữ nhật trên là "+cV+" và "+dT;
    document.getElementById('cV_dT').innerHTML=ketQua;
}

/*
BÀI TẬP 5: TÍNH TỔNG 2 CHỮ SỐ CỦA SỐ N
-Input:
+N: số tự nhiên có 2 chữ số
-Process:
+soHangchuc=Math.floor(N/10)
+soDonvi=N%10
+tongHaiso=soHangchuc+soDonvi
-Output:
tongHaiso
*/
document.getElementById('tong').onclick=function(){
    var soN=document.getElementById('soN').value*1;
    var soHangchuc=Math.floor(soN/10);
    var soDonvi=soN%10;
    var tong=soHangchuc+soDonvi;
    var ketQua="Tổng 2 chữ số của số "+soN+" là "+tong;
    document.getElementById('outPut').innerHTML=ketQua;
}