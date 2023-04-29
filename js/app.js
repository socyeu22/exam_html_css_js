// Lấy ra form và các trường thông tin cần validate
const form = document.querySelector('.form');
const usernameInput = document.querySelector('.input-user');
const emailInput = document.querySelector('.input-email');
const phoneInput = document.querySelector('.phone-number');
const jobSelect = document.querySelector('.job-select');
const passwordInput = document.querySelector('.input-pass');
const repeatPasswordInput = document.querySelector('.input-repass');

// Thêm sự kiện submit vào form
form.addEventListener('submit', function(event) {
    // Ngăn chặn form submit mặc định
    event.preventDefault();

    // Kiểm tra các giá trị trong các trường thông tin
    if (usernameInput.value.trim() === '') {
        alert('Vui lòng nhập tên đăng nhập!');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Vui lòng nhập địa chỉ email!');
        return;
    }

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailInput.value.trim())) {
        alert('Vui lòng nhập địa chỉ email hợp lệ!');
        return;
    }

    if (phoneInput.value.trim() === '') {
        alert('Vui lòng nhập số điện thoại!');
        return;
    }

    if (jobSelect.value === '') {
        alert('Vui lòng chọn loại công việc!');
        return;
    }

    if (passwordInput.value.trim() === '') {
        alert('Vui lòng nhập mật khẩu!');
        return;
    }

    if (repeatPasswordInput.value.trim() === '') {
        alert('Vui lòng nhập lại mật khẩu!');
        return;
    }

    if (passwordInput.value !== repeatPasswordInput.value) {
        alert('Mật khẩu nhập lại không khớp!');
        return;
    }

    // Nếu tất cả các giá trị đều hợp lệ, gửi form đi
    form.submit();
});
