const input = document.getElementById('loadpicture');
const button = document.querySelector('#clickload');
const dropArea = document.querySelector('#dropArea');
var isLoggedIn = true;
setInterval(auto, 7000);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      
    } else {
      x.className = "topnav"; 
    }
}
var image_1 = new Object();
var image_2 = new Object()
// scroll top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// crate profile
document.getElementById('createprofile').addEventListener('click', function() {
  if(isLoggedIn){
    window.location.href = "createprofile";
  } else{
    alert('Chưa đăng nhập');
  }
});
function successbtn() {
  
    var checkbox = document.getElementById('privacy');
    if (checkbox.checked) {
      window.location.href = "http://127.0.0.1:8000/success";
    } else {
        alert('Bạn phải đọc và đồng ý các điều khoản dịch vụ và chính sách quyền riêng tư trước khi tạo hồ sơ !');
    
    }
  //alert('113');
  //window.location.href = "http://127.0.0.1:8000/success"; 
 }

//edit profile
document.getElementById('editprofile').addEventListener('click', function() {
  if(isLoggedIn){
    window.location.href = "createprofile";
  } else{
    alert('Chưa đăng nhập');
  }
});
var slideIndex = 1;
showSlider(slideIndex);
//back to home
document.getElementById('homebtn').addEventListener('click', function() {
  window.location.href = "createprofile"; 
});





// upload ảnh
function allowDrop(event) {
  
  var imagesCount = document.getElementById('image-preview').querySelectorAll('img').length;
  if (imagesCount >= 2) {
    alert('Chỉ được thêm tối đa 2 ảnh.');
    return;
  }
  event.preventDefault();
  var dragText = document.getElementById('dragText');
  dragText.textContent = ' Thả ảnh tại đây';
  
}
function dragLeave(event) {
  event.preventDefault();
  var dragText = document.getElementById('dragText');
  dragText.textContent = ' Kéo thả để tải lên';
  
}
function drop(event) {
  event.preventDefault();
  var preview = document.getElementById('image-preview');
  var details = document.getElementById('image-details');
  var addButton = document.getElementById('add-button');

  var files = event.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var image = document.createElement('img');
    var previewContainer = document.createElement('div');
    var detailsContainer = document.createElement('div');
    var progressContainer = document.createElement('div');
    var progress = document.createElement('div');
    var progressBar = document.createElement('div');
    var progressLabel = document.createElement('div');
    var deleteButton = document.createElement('button');
    var loaded = 0;

    deleteButton.style.borderRadius = '5px'; // Góc bo tròn 5px
    deleteButton.style.border = '2px solid red'; // Viền màu đỏ
    deleteButton.style.backgroundColor = 'white'; // Nền màu trắng
    deleteButton.style.color = 'red';
    deleteButton.style.zIndex = '10';
    deleteButton.style.position= 'absolute';
    

    image.classList.add('preview-image');
    previewContainer.classList.add('preview-container');
    detailsContainer.classList.add('preview-details');
    progressContainer.classList.add('progress-container');
    progress.classList.add('progress');
    progressBar.classList.add('progress-bar');
    progressLabel.classList.add('progress-label');
    

    preview.appendChild(previewContainer);
    previewContainer.appendChild(image);
    previewContainer.appendChild(detailsContainer);
    detailsContainer.appendChild(progressContainer);
    progressContainer.appendChild(progress);
    progressContainer.appendChild(progressLabel);
    progress.appendChild(progressBar);

    deleteButton.textContent = 'Xóa';
      deleteButton.addEventListener('click', function() {
        previewContainer.remove();
      });

    var reader = new FileReader();

    reader.onloadstart = function() {
      var interval = setInterval(function() {
        progressLabel.innerText = Math.round(loaded) + '%';
        progressBar.style.width = Math.round(loaded) + '%';
        progressLabel.style.right = (100 - Math.round(loaded)) + '%';

        if (loaded === 100) {
          clearInterval(interval);
          progressContainer.style.display = 'none';
          progressBar.style.display = 'none';
          progressLabel.style.display = 'none';
        }
      }, 50);

      var step = 100 / (5000 / 1024);
      var updateProgress = function() {
        loaded += step;
        if (loaded > 100) {
          loaded = 100;
        }
      };

      var updateInterval = setInterval(function() {
        updateProgress();
        if (loaded === 100) {
          clearInterval(updateInterval);
        }
      }, 100);
    };

    reader.onload = function(e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
    if (Object.keys(image_1).length === 0) {
      $(image_1).prop('file', files);
    } else {
      $(image_2).prop('file', files);
    }
    var imageName = document.createElement('p');
    imageName.textContent = 'Tên: '+file.name;

    var imageSize = document.createElement('p');
    imageSize.textContent = 'Dung lượng: ' + (file.size / 1024).toFixed(2) + ' KB';
    
    detailsContainer.appendChild(imageName);
    detailsContainer.appendChild(deleteButton);
    detailsContainer.appendChild(imageSize);
  }
  
}
function load() {
  
  var imagesCount = document.getElementById('image-preview').querySelectorAll('img').length;
  if (imagesCount >= 2) {
    alert('Chỉ được thêm tối đa 2 ảnh.');
    return;
  }
  input.click();

}

function onchangepic() {
  var preview = document.getElementById('image-preview');
  var details = document.getElementById('image-details');
  var addButton = document.getElementById('add-button');

  var files = input.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var image = document.createElement('img');
    var previewContainer = document.createElement('div');
    var detailsContainer = document.createElement('div');
    var progressContainer = document.createElement('div');
    var progress = document.createElement('div');
    var progressBar = document.createElement('div');
    var progressLabel = document.createElement('div');
    var deleteButton = document.createElement('button');
    var loaded = 0;

    deleteButton.style.borderRadius = '5px'; // Góc bo tròn 5px
    deleteButton.style.border = '2px solid red'; // Viền màu đỏ
    deleteButton.style.backgroundColor = 'white'; // Nền màu trắng
    deleteButton.style.color = 'red';
    deleteButton.style.zIndex = '10';
    deleteButton.style.position= 'absolute';
    

    image.classList.add('preview-image');
    previewContainer.classList.add('preview-container');
    detailsContainer.classList.add('preview-details');
    progressContainer.classList.add('progress-container');
    progress.classList.add('progress');
    progressBar.classList.add('progress-bar');
    progressLabel.classList.add('progress-label');
    

    preview.appendChild(previewContainer);
    previewContainer.appendChild(image);
    previewContainer.appendChild(detailsContainer);
    detailsContainer.appendChild(progressContainer);
    progressContainer.appendChild(progress);
    progressContainer.appendChild(progressLabel);
    progress.appendChild(progressBar);

    deleteButton.textContent = 'Xóa';
      deleteButton.addEventListener('click', function() {
        previewContainer.remove();
      });

    var reader = new FileReader();

    reader.onloadstart = function() {
      var interval = setInterval(function() {
        progressLabel.innerText = Math.round(loaded) + '%';
        progressBar.style.width = Math.round(loaded) + '%';
        progressLabel.style.right = (100 - Math.round(loaded)) + '%';

        if (loaded === 100) {
          clearInterval(interval);
          progressContainer.style.display = 'none';
          progressBar.style.display = 'none';
          progressLabel.style.display = 'none';
        }
      }, 50);

      var step = 100 / (5000 / 1024);
      var updateProgress = function() {
        loaded += step;
        if (loaded > 100) {
          loaded = 100;
        }
      };

      var updateInterval = setInterval(function() {
        updateProgress();
        if (loaded === 100) {
          clearInterval(updateInterval);
        }
      }, 100);
    };

    reader.onload = function(e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
    if (Object.keys(image_1).length === 0) {
      $(image_1).prop('file', files);
    } else {
      $(image_2).prop('file', files);
    }
    var imageName = document.createElement('p');
    imageName.textContent = 'Tên: '+file.name;

    var imageSize = document.createElement('p');
    imageSize.textContent = 'Dung lượng: ' + (file.size / 1024).toFixed(2) + ' KB';
    
    detailsContainer.appendChild(imageName);
    detailsContainer.appendChild(deleteButton);
    detailsContainer.appendChild(imageSize);
  }

}

function next(){
  var imageContainer = document.getElementById('image-preview');
  var infoForm = document.getElementById('selectprofiletype');
  var message = document.getElementById('message');
  if (imageContainer.innerHTML.trim() === '') {
    message.style.display = 'block';
    infoForm.style.display = 'none';
  } else {
    if (imageContainer.childElementCount == 1){
      message.style.display = 'none';
      infoForm.style.display = 'block';
      $('[name=formimportpicture]').hide();
      const formData = new FormData();
      document.getElementById('selectprofiletype').scrollIntoView();
      formData.append('image_1', image_1.file[0]);
      // formData.append('image_2', image_2.file[0]);
      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);
      $.ajax({
        type: "POST",
        url: "/process_image/",
        headers: {
        "X-CSRFToken": $('[name="csrfmiddlewaretoken"]').val(),
        },
        data: formData,
        contentType: false,
        cache: false,
        processData: false
      }).done(function (o) {
        console.log(o);
      });
    } else {
      message.innerHTML = "*Số lượng ảnh tải lên vẫn chưa đủ (mặt trước và mặt sau CCCD)";
      message.style.display = 'block';
    }
  }
}
function first_select() {
  let value = $("input[name='checkbox']:checked").val();
  }

  function nextoption() {
  var radios = document.querySelectorAll('input[type="radio"]:checked');
  var message = document.getElementById('messageoption');
  
  if (radios.length === 0) {
    message.style.display = 'block';
  } else {
    document.getElementById("myModal").style.display = "flex";
    message.style.display = 'none';
  }
}
function confirmButton() {
  
  var radioForm = document.getElementById('formimportpicture');
  var imgForm = document.getElementById('selectprofiletype');
  var infor = document.getElementById('infor');
  
  document.getElementById("myModal").style.display = "none";
  console.log('12');
  
  imgForm.style.display = 'none';
  radioForm.style.display = 'none';
  infor.style.display = 'flex';
  
  /*window.location.href = "https://www.google.com";*/
}

function cancelButton() {
  document.getElementById("myModal").style.display = "none";
}




function plusSlider(n) {
  showSlider(slideIndex += n);
}

function currentSlider(n) {
  showSlider(slideIndex = n);
}

function showSlider(n) {
  var i;
  var slider = document.getElementsByClassName("mySlider");
  //var dots = document.getElementsByClassName("dot");
  if (n > slider.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slider[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}

/*setInterval(function() {
  plusSlider(1);
}, 1000);*/


function auto() {
  /*console.log('12');*/
  plusSlider(1);
  
}

function userlogin() {
  
  var authDisplay = document.getElementById('authDisplay');
  /*console.log(isLoggedIn);*/
  
  if (isLoggedIn) {
    // Create user icon
    var userIcon = document.createElement('a');
      userIcon.className = 'user-icon';
      userIcon.id = 'userIcon';
      var img = document.createElement('img');
      img.src = 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'; // Provide the path to your image here
      img.alt = 'User Icon';
      userIcon.appendChild(img);
      userIcon.onclick = function() {
        var form = document.getElementById('userForm');
        if (form.style.display == 'none' ) {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
      };
      authDisplay.appendChild(userIcon);
  } else {
    // Create login text
    var loginButton = document.createElement('a');
    loginButton.className = 'login-button';
    loginButton.innerHTML = 'Đăng nhập';
    loginButton.id = 'trigger-div';
    loginButton.onclick = function() {
      var form = document.getElementById('loginForm');
      if (form.style.display == 'none' ) {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
    };
    authDisplay.appendChild(loginButton);
  }
};

function setMinDateForDateInput() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('datecreate').setAttribute('min', today);
}
function businesstransformation() {
  
  const selectElement = document.getElementById('businesstransformation');
  const dividForm = document.getElementById('dividForm');
  const businessconversionForm = document.getElementById('businessconversionForm');
  const sponsoringfacilityForm = document.getElementById('sponsoringfacilityForm');
  
  if (selectElement.value === 'option2' || selectElement.value === 'option3'|| selectElement.value === 'option4'||selectElement.value === 'option5') {
    dividForm.style.display = 'block';
    businessconversionForm.style.display = 'none';
    sponsoringfacilityForm.style.display = 'none';
  }else if (selectElement.value === 'option6') {
    dividForm.style.display = 'none';
    businessconversionForm.style.display = 'block';
    sponsoringfacilityForm.style.display = 'none';
  }else if (selectElement.value === 'option7') {
    dividForm.style.display = 'none';
    businessconversionForm.style.display = 'none';
    sponsoringfacilityForm.style.display = 'block';
  }else{
    dividForm.style.display = 'none';
    businessconversionForm.style.display = 'none';
    sponsoringfacilityForm.style.display = 'none';
  }
  
}

function typeofForm() {
  const selectElement = document.getElementById('typeof');
  const individualForm = document.getElementById('typeofForm');
  
  if (selectElement.value === 'option4') {
    individualForm.style.display = 'block';
  }else{
    individualForm.style.display = 'none';
    
  }
}
function toggleForm() {
  var checkbox = document.getElementById("toggleCheckbox");
  var form = document.getElementById("additionalForm");

  if (checkbox.checked) {
      form.style.display = "block";
  } else {
      form.style.display = "none";
  }
}

function ownerForm() {
  const selectElement = document.getElementById('selectowner');
  const individualForm = document.getElementById('individualForm');
  const organizationForm = document.getElementById('organizationForm');
  if (selectElement.value === 'option1') {
    individualForm.style.display = 'block';
    organizationForm.style.display = 'none';
  } else if(selectElement.value === 'option2') {
    individualForm.style.display = 'none';
    organizationForm.style.display = 'block';
  }else{
    individualForm.style.display = 'none';
    organizationForm.style.display = 'none';
  }
}



function addRow() {
  const table = document.getElementById("businessTable");
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.innerHTML = rowCount; // STT (Số thứ tự)
  cell2.innerHTML = `<input type="text" name="tenNganh">`; // Tên ngành
  cell3.innerHTML = `<input type="text" name="maNganh">`; // Mã ngành
  cell4.innerHTML = `<input type="checkbox" name="nganhKinhDoanhChinh">`; // Ngành, nghề kinh doanh chính
}
function validatePhoneNumber(input) {
  input.value = input.value.replace(/[^0-9]/g, ''); // Loại bỏ các ký tự không phải số
}