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

// kéo thả ảnh

/*function load(){
    input.click();
    
    input.addEventListener('change', function(){
        const file = this.files[0];
        showFile(file);
        
    })
}

function deletebtn() {
    var img = document.getElementById('dragged-image');
  if (img) {
    img.parentNode.removeChild(img);
      var placeholder = document.createElement('div');
    placeholder.className = "placeholder";
    placeholder.innerHTML = `
    <div style="display: flex;justify-content: center; align-items: center;"><img src="../static/icon/Picture.png" alt="err" style="width: 150px; height: 150px;"></div>
    <header style="font-size: 1.125rem; display: flex;justify-content: center; align-items: center;">Kéo thả để tải file lên, hoặc '<button style="color: #4299e1;text-decoration: underline; border: none;" id="clickload" onclick="load()"> chọn file</button> '
    </header>
    <span style="color: #cbd5e0;font-size: 0.875rem;">Hỗ trợ: PNG, JPG, JPEG, WEBP</span>
    <input type="file" hidden name="" id="loadpicture" >
    `;
    document.getElementById('dropArea').appendChild(placeholder);
    document.getElementById('image-url').value = '';    
    }
  }

function allowDrop(event) {
    event.preventDefault();
  }
function drop(event) {
   
    event.preventDefault();
    var files = event.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.id = "dragged-image";
        dropArea.innerHTML = '';
        dropArea.appendChild(img);
      }
      reader.readAsDataURL(files[0]);
    
}


function showFile(file){
    const fileType = file.type;
    const validExtensions = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if(validExtensions.includes(fileType)){
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileUrl = fileReader.result;
            const imgTag = `<img src="${fileUrl}" style="display: block;
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;" id="dragged-image">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else{
        alert('Không hỗ trợ định dạng này');
        
    }
}


function showImage() {
    var imageUrl = document.getElementById("image-url").value;
    
    console.log(imageUrl);
    
    if (isValidImageUrl(imageUrl)) {
        
        dropArea.innerHTML = '<img id="dragged-image" src="' + imageUrl + '" alt="Hình ảnh" style="display: block;max-width: 100%;max-height: 100%;width: auto;height: auto;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;">';
        
    } else {
        alert('Không hỗ trợ định dạng này');
    }
  }
  
  function isValidImageUrl(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }*/
  /*function load(){
    input.click();
    input.addEventListener('change', function() {
    var files = this.files;
    var imageContainer = document.getElementById('imageContainer');
  
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
  
      reader.onload = (function(file) {
        return function(e) {
          var imgContainer = document.createElement('div');
          imgContainer.className = 'img-container';
          
          var img = document.createElement('img');
          img.src = e.target.result;
          img.className = 'uploaded-image';
          imgContainer.appendChild(img);
  
          var fileInfo = document.createElement('div');
          fileInfo.className = 'file-info';
  
          var fileName = document.createElement('span');
          fileName.innerText = 'Tên ảnh: ' + file.name;
          fileInfo.appendChild(fileName);
  
          var fileSize = document.createElement('span');
          fileSize.innerText = '\n Dung lượng: ' + (file.size / 1024).toFixed(2) + ' KB';
          fileInfo.appendChild(fileSize);
          imgContainer.appendChild(fileInfo);
  
          var progressBar = document.createElement('div');
          progressBar.className = 'progress-bar';
          var progressLabel = document.createElement('span');
          progressLabel.innerText = '0%';
          progressBar.appendChild(progressLabel);
          imgContainer.appendChild(progressBar);
  
          imageContainer.appendChild(imgContainer);
  
          var loaded = 0;
  
          var interval = setInterval(function() {
            progressLabel.innerText = loaded + '%';
            progressBar.style.width = loaded + '%';
  
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
      })(file);
  
      reader.readAsDataURL(file);
    }
  });
}*/
function load() {
  input.click();
  input.handleFile();
    
    


}

function handleFile() {
  
  for (var i = 0; i < files.length; i++) {
      handleFileInputChange(files[i]);
  }
}

function handleFileInputChange(file) {
  var preview = document.getElementById('image-preview');
  var details = document.getElementById('image-details');

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