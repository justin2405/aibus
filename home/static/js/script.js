
const input = document.getElementById('loadpicture');
const button = document.querySelector('#clickload');
const dropArea = document.querySelector('#dropArea');


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      
    } else {
      x.className = "topnav";
      
    }
  }
  
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
    window.location.href = "createprofile"; 
});

//edit profile
document.getElementById('editprofile').addEventListener('click', function() {
    window.location.href = "createprofile"; 
});

//back to home
document.getElementById('homebtn').addEventListener('click', function() {
  window.location.href = "createprofile"; 
});

// upload ảnh
function allowDrop(event) {
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
    var loaded = 0;

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

    var reader = new FileReader();

    reader.onloadstart = function() {
      var interval = setInterval(function() {
        progressLabel.innerText = Math.round(loaded) + '%';
        progressBar.style.width = Math.round(loaded) + '%';
        progressLabel.style.right = (100 - Math.round(loaded)) + '%';

        if (loaded === 100) {
          clearInterval(interval);
        }
      }, 50);

      var step = 100 / (file.size / 1024);
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

    var imageName = document.createElement('p');
    imageName.textContent = 'Tên: ' + file.name;

    var imageSize = document.createElement('p');
    imageSize.textContent = 'Dung lượng: ' + (file.size / 1024).toFixed(2) + ' KB';

    detailsContainer.appendChild(imageName);
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
    
    message.style.display = 'none';
    infoForm.style.display = 'block';
  }
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
  radioForm.style.display = 'none';
  imgForm.style.display = 'none';
  infor.style.display = 'block';
  document.getElementById("myModal").style.display = "none";

  /*window.location.href = "https://www.google.com";*/
}

function cancelButton() {
  document.getElementById("myModal").style.display = "none";

}
