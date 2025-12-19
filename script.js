function openCategory(id) {
    document.getElementById('home').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function goHome() {
    document.querySelectorAll('.video-list').forEach(v => v.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}