const form = document.getElementById('myform1');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('input-nama').value;
    if (!input) {
        alert('Input tidak boleh kosong!');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const email = document.getElementById('input-email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        alert('email tidak boleh kosong');
        event.preventDefault();
    }
    
    
});
form.addEventListener('submit', function(event) {
    const password = document.getElementById('input-password').value;
    if (password.length < 8 ) {
        alert('Password harus terdiri dari minimal 8 karakter!');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const password = document.getElementById('input-password').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    if (confirmPassword !== password) {
        alert('Password dan konfirmasi password tidak cocok!');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const phone = document.getElementById('phoneInput').value;
    if (!/^[0-9]+$/.test(phone)) {
        alert('Nomor telepon hanya boleh angka!');
        event.preventDefault();
        return;
    }
    else if (phone.length > 12) {
        alert('Nomor telepon hanya boleh 12 ');
        event.preventDefault();
        return;
    }
});

form.addEventListener('submit', function(event) {
    const umur = document.getElementById('input-umur').value;

    if (!umur || umur < 1 || umur > 100) {
        alert('Umur harus di antara 1 sampai 100!');
        event.preventDefault();
    }
});

form.addEventListener('submit', function(event) {
    const checkbox = document.getElementById('input-setuju').checked;
    if (!checkbox) {
        alert('Anda harus menyetujui syarat dan ketentuan!');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const url = document.getElementById('urlInput').value;

    const urlPattern = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/.+$/;

    if (!urlPattern.test(url)) {
        alert('Masukkan URL yang valid!');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const dropdown = document.getElementById('select-pekerjaan').value;
    if (!dropdown) {
        alert('Silakan pekerjaan anda');
        event.preventDefault();
    }
});


form.addEventListener('submit', function(event) {
    const input = document.getElementById('textInput').value;
    if (input.length > 100) {
        alert('Input tidak boleh lebih dari 100 karakter!');
        event.preventDefault();
    }
});