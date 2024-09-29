//日曆更新
function updateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    document.getElementById('year').textContent = year;
    document.getElementById('month').innerHTML = month + '<sub>月</sub>';
    document.getElementById('day').textContent = day < 10 ? '0' + day : day;
}
//時鐘更新
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //秒針轉動角度 = (秒數 / 60) * 360
    const secondDegrees = (seconds / 60) * 360;
    //分針轉動角度 = (分 / 60) * 360
    const minuteDegrees = (minutes / 60) * 360;
    //時針轉動角度 = (時 / 12) * 360 + (分 / 60) * 30
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    //更新秒針、內部秒針、正方形的旋轉
    document.getElementById("secondHand").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("secondHandinner").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("square").setAttribute("transform", `rotate(${secondDegrees+45} 150 150)`);

    //更新分針、內部分針、三角形的旋轉
    document.getElementById("minuteHand").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("minuteHandinner").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("triangle").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);

    //更新時針、內部時針、內切圓的旋轉
    document.getElementById("hourHand").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("hourHandinner").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("innerCircle").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
}

//每秒更新日曆與時鐘
calendarInterval = setInterval(updateCalendar, 1000);
clockInterval = setInterval(updateClock, 1000);

//按鈕和視窗
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementById("closeModalBtn");

//按下按鈕，顯示互動視窗
openBtn.onclick = function() {
    modal.style.display = "flex";
}

//按下關閉，關掉互動視窗
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//點擊互動視窗以外的地方時，關掉互動視窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//表單提交
document.getElementById("timeForm").onsubmit = function(e) {
    e.preventDefault(); //防呆
    
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;

    //計算角度
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    //更新秒針、內部秒針、正方形的旋轉
    document.getElementById("secondHand").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("secondHandinner").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("square").setAttribute("transform", `rotate(${secondDegrees+45} 150 150)`);

    //更新分針、內部分針、三角形的旋轉
    document.getElementById("minuteHand").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("minuteHandinner").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("triangle").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);

    //更新時針、內部時針、內切圓的旋轉
    document.getElementById("hourHand").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("hourHandinner").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("innerCircle").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);

    //停止自動更新時鐘
    clearInterval(clockInterval);

    //自動關閉互動視窗
    modal.style.display = "none";
}