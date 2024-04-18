// crate profile
document.getElementById('createprofile').addEventListener('click', function() {
    window.location.href = "createprofile"; 
});

//edit profile
document.getElementById('editprofile').addEventListener('click', function() {
    window.location.href = "createprofile"; 
});
//upload ảnh
document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0]; // Lấy file đầu tiên từ danh sách file đã chọn
  if (file) {
        var reader = new FileReader(); // Tạo một FileReader object để đọc file

        reader.onload = function(e) {
            var image = document.createElement('img');
            image.src = e.target.result; // Set source của ảnh là dữ liệu từ file đã chọn
           document.getElementById('uploadpicture').innerHTML = ''; // Xóa nội dung cũ trong container ảnh
          document.getElementById('uploadpicture').appendChild(image); // Thêm ảnh vào container
        };

        reader.readAsDataURL(file); // Đọc file dưới dạng URL dữ liệu (data URL)
    }
});