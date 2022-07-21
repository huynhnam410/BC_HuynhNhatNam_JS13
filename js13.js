// Câu 1

// SƠ ĐỒ 3 KHỐI

// Input:lương 1 ngày+số ngày làm

// Process :1 lấy Input
// 2 tính lương=1 ngày lương*số ngày làm
// 3 log luong ra man hình

// Output :lương

// var salaryDay=10000
// var workingDays=25
// var totalSlary=salaryDay*workingDays

// console.log('tổng lương tháng là:',totalSlary)

function cau1(){
    var workingDays=+document.getElementById("workingDays").value
    //  workingDays.innerHTML
    var salaryDay=+document.getElementById("salaryDay").value
    
    
    var totalSlary =salaryDay*workingDays;

    var node=document.getElementById("node1");
    node1.innerHTML=totalSlary
// console.log (totalSlary)

}



//  var node=document.getElementById("node");
//  node.innerHTML="hoc JSSs"
// Câu 2

// SƠ ĐỒ 3 KHỐI

// Input:5 số thực

// Process :1 lấy Input
// 2 tính giá trị trung bình của 5 số
// 3 log kết quả ra man hình

// Output :trung bình tổng 5 số

// var number1=1
// var number2=2
// var number3=3
// var number4=4
// var number5=5
// var averageNumber=(number1+number2+number3+number4+number5)/5

// console.log('trung bình tổng 5 số là',averageNumber)

function cau2(){
    var number1=+document.getElementById("number1").value
    var number2=+document.getElementById("number2").value
    var number3=+document.getElementById("number3").value
    var number4=+document.getElementById("number4").value
    var number5=+document.getElementById("number5").value

    var averageNumber=(number1+number2+number3+number4+number5)/5

    var node2=document.getElementById("node2");
    node2.innerHTML=averageNumber



}


// Câu 3

// SƠ ĐỒ 3 KHỐI

// Input:giá USD 23.500, số tiền USD

// Process :1 lấy Input
// 2 tính giá USD ra VND
// 3 log kết quả ra man hình

// Output :giá VND

// var longR=23500
// var moneyUSD=2
// var priceVND=moneyUSD*priceUSD
// console.log('giá tiền của 2 USD là',priceVND)

function cau3(){
    var priceUSD=+document.getElementById("priceUSD").value
    //  priceUSD.innerHTML
    var moneyUSD=+document.getElementById("moneyUSD").value
    
    
    var priceVND =moneyUSD*priceUSD;

    var node3=document.getElementById("node3");
    node3.innerHTML=priceVND
// console.log (totalSlary)

}


// Câu 4

// SƠ ĐỒ 3 KHỐI

// Input:chiều dài+chiều roog của HCN

// Process :1 lấy Input
// 2 tính chu vi và diện tích hcn
// 3 log kết quả ra man hình

// Output :chu vi và diện tích hcn

// var longR=10
// var wideR=5
// var areaR=longR*wideR
// var perR=(longR+wideR)*2
// console.log('dien tích HCN là',areaR)
// console.log('chu vi HCN là',perR)

function cau4(){
    var longR=+document.getElementById("longR").value
    //  longR.innerHTML
    var wideR=+document.getElementById("wideR").value
    
    
    var areaR =wideR*longR;

    var perR=(longR+wideR)*2

    var node4_1=document.getElementById("node4_1");
    node4_1.innerHTML=areaR

    var node4_2=document.getElementById("node4_2");
    node4_2.innerHTML=perR



}



// Câu 5

// SƠ ĐỒ 3 KHỐI

// Input:1 số có 2 chữ số

// Process :1 lấy Input
// 2 tính tổng 2 ký số
// 3 log kết quả ra man hình

// Output :tổng 2 ký số 

var numberAB=25
var numberB=numberAB%10
var numberA=(numberAB-numberB)/10
var totalAB=numberA+numberB
// console.log('tổng 2 ký số là',totalAB)


function cau5(){
    var numberAB=+document.getElementById("numberAB").value
    //  priceUSD.innerHTML
   
    var numberB=numberAB%10
var numberA=(numberAB-numberB)/10
var totalAB=numberA+numberB
    
    

    var node5=document.getElementById("node5");
    node5.innerHTML=totalAB


}