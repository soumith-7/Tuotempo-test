// script.js
function showScreen(screenId) {
    const screens = document.querySelectorAll('.container');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

function submitCode() {
    const code = document.getElementById('appointmentCode').value;
    if (code) {
        showScreen('gpsScreen');
    } else {
        alert('Please enter your appointment code or ID.');
    }
}

function changeLanguage() {
    alert('Language selection functionality coming soon.');
}

function cancelCheckIn() {
    if (confirm('Are you sure you want to cancel your check-in?')) {
        showScreen('welcomeScreen');
    }
}
