document.addEventListener("DOMContentLoaded", function() {
    setInterval(changeBackgroundColor, 3000);
});

function changeBackgroundColor() {
    var resume = document.getElementById('resume');
    var randomColor = getRandomColor();
    resume.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
