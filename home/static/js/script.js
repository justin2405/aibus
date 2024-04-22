const input = document.querySelector('#loadpicture');
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
/*document.getElementById('editprofile').addEventListener('click', function() {
    window.location.href = "createprofile"; 
});*/


// kéo thả ảnh

function load(){
    input.click();
    /*console.log(button);*/
    input.addEventListener('change', function(){
        const file = this.files[0];
        showFile(file);
        /*console.log('load');*/
    })
}


dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    showFile(file);
})


function showFile(file){
    const fileType = file.type;
    const validExtensions = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if(validExtensions.includes(fileType)){
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileUrl = fileReader.result;
            const imgTag = `<img src="${fileUrl}">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else{
        alert('Không hỗ trợ định dạng này');
        
    }
}
