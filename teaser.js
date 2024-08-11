function updateCountdown() {
    const targetDate = new Date('2024-09-9T11<a:00:1246880626876088340>00+09:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = "00<a:00:1246880626876088340>00:00";
        return;
    }

    const totalHours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    document.getElementById('countdown').innerHTML =
        String(totalHours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ':' +
        String(milliseconds).padStart(2, '0');
}

setInterval(updateCountdown, 10);
updateCountdown();
