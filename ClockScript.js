// 日曆更新
function updateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    document.getElementById('year').textContent = year;
    document.getElementById('month').innerHTML = month + '<sub>月</sub>';
    document.getElementById('day').textContent = day < 10 ? '0' + day : day;
}

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // 秒數的百分比（每 60 秒一圈）
    const secondDegrees = (seconds / 60) * 360;
    // 分鐘的百分比（每 60 分鐘一圈）
    const minuteDegrees = (minutes / 60) * 360;
    // 小時的百分比（每 12 小時一圈）
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    // 更新秒針和正方形的旋轉
    document.getElementById("secondHand").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("secondHandinner").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("square").setAttribute("transform", `rotate(${secondDegrees+45} 150 150)`);

    // 更新分針和三角形的旋轉
    document.getElementById("minuteHand").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("minuteHandinner").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("triangle").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);

    // 更新時針和內切圓的旋轉
    document.getElementById("hourHand").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("hourHandinner").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("innerCircle").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
}

// 每秒更新日曆與時鐘
calendarInterval = setInterval(updateCalendar, 1000);
clockInterval = setInterval(updateClock, 1000);

// 獲取按鈕和模態框
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementById("closeModalBtn");

// 當按下按鈕時，顯示模態框
openBtn.onclick = function() {
    modal.style.display = "flex"; // 使用 flex 來讓模態框居中
}

// 當按下關閉按鈕時，隱藏模態框
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 當點擊模態框的外部區域時，隱藏模態框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 表單提交事件
document.getElementById("timeForm").onsubmit = function(e) {
    e.preventDefault(); // 阻止表單默認提交行為
    
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;

    // 根據輸入的時間計算角度
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    // 更新秒針和正方形的旋轉
    document.getElementById("secondHand").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("secondHandinner").setAttribute("transform", `rotate(${secondDegrees} 150 150)`);
    document.getElementById("square").setAttribute("transform", `rotate(${secondDegrees+45} 150 150)`);

    // 更新分針和三角形的旋轉
    document.getElementById("minuteHand").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("minuteHandinner").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);
    document.getElementById("triangle").setAttribute("transform", `rotate(${minuteDegrees} 150 150)`);

    // 更新時針和內切圓的旋轉
    document.getElementById("hourHand").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("hourHandinner").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);
    document.getElementById("innerCircle").setAttribute("transform", `rotate(${hourDegrees} 150 150)`);

    // 停止自動更新時鐘
    clearInterval(clockInterval);

    // 提交後自動關閉模態框
    modal.style.display = "none";
}