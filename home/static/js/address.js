
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("created_day"),document.getElementById("created_month"),document.getElementById("created_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("dob_day"),document.getElementById("dob_month"),document.getElementById("dob_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("id_created_day"),document.getElementById("id_created_month"),document.getElementById("id_created_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("id_expired_day"),document.getElementById("id_expired_month"),document.getElementById("id_expired_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("pro_date"),document.getElementById("pro_month"),document.getElementById("pro_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("coop_created_date"),document.getElementById("coop_created_month"),document.getElementById("coop_created_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("pro_coop_date"),document.getElementById("pro_coop_month"),document.getElementById("pro_coop_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("preDobDate"),document.getElementById("preDobMonth"),document.getElementById("preDobYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("preIdDate"),document.getElementById("preIdMonth"),document.getElementById("preIdYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("preIdExDate"),document.getElementById("preIdExMonth"),document.getElementById("preIdExYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("start_date"),document.getElementById("start_month"),document.getElementById("start_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("fi_start_date"),document.getElementById("fi_start_month"),document.getElementById("fi_start_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("fi_end_date"),document.getElementById("fi_end_month"),document.getElementById("fi_end_year")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("SocialPreIdExDate"),document.getElementById("SocialPreIdExMonth"),document.getElementById("SocialPreIdExYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("SocialPreIdDate"),document.getElementById("SocialPreIdMonth"),document.getElementById("SocialPreIdYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("SocialNoDate"),document.getElementById("SocialNoMonth"),document.getElementById("SocialNoYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("famOwnIdExDate"),document.getElementById("famOwnIdExMonth"),document.getElementById("famOwnIdExYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("famOwnIdDate"),document.getElementById("famOwnIdMonth"),document.getElementById("famOwnIdYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("famIdDate"),document.getElementById("famIdMonth"),document.getElementById("famIdYear")));
document.addEventListener("DOMContentLoaded", inittime(document.getElementById("transNoDate"),document.getElementById("transNoMonth"),document.getElementById("transNoYear")));




var Parameter = {
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
    method: "GET", 
    responseType: "application/json", 
  };
  var promise = axios(Parameter);
  
  // address
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("province"), document.getElementById("district"), document.getElementById("ward"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("company_province"), document.getElementById("company_district"), document.getElementById("company_ward"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("live_city"), document.getElementById("live_province"), document.getElementById("live_ward"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("contact_city"), document.getElementById("contact_district"), document.getElementById("contact_ward"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("coop_city"), document.getElementById("coop_district"), document.getElementById("coop_ward"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("preCity"), document.getElementById("preDist"), document.getElementById("preWard"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("preContactCity"), document.getElementById("preContactDist"), document.getElementById("preContactWard"));
  });
  promise.then(function (result) {
    renderCity(result.data ,document.getElementById("tax_city"), document.getElementById("tax_district"), document.getElementById("tax_ward"));
  });
  
  function renderCity(data, citis, district, ward) {
    for (const x of data) {
      citis.options[citis.options.length] = new Option(x.Name, x.Id);
    }
    citis.onchange = function () {
      district.length = 1;
      ward.length = 1;
      if(this.value != ""){
        const result = data.filter(n => n.Id === this.value);
  
        for (const k of result[0].Districts) {
          district.options[district.options.length] = new Option(k.Name, k.Id);
        }
      }
    };
    district.onchange = function () {
      ward.length = 1;
      const dataCity = data.filter((n) => n.Id === citis.value);
      if (this.value != "") {
        const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
  
        for (const w of dataWards) {
          ward.options[ward.options.length] = new Option(w.Name, w.Id);
        }
      }
    };
  }
  
  // Date
  function populateDays(month, year) {
    const daySelect = document.getElementById("date");
    daySelect.innerHTML = ""; 
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.add(option);
    }
}

function validateDate() {
    const day = parseInt(document.getElementById("date").value, 10);
    const month = parseInt(document.getElementById("month").value, 10) - 1; // JS months are 0-based
    const year = parseInt(document.getElementById("year").value, 10);

    const selectedDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    errortoday(selectedDate,today);
}
 function errortoday(selectedDate,today){
  const errorMsg = document.getElementById("error-message");
    if (selectedDate < today) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }
 }

function init() {
    const today = new Date();
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("date");

    for (let i = today.getFullYear(); i <= today.getFullYear() + 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.add(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        monthSelect.add(option);
    }

    monthSelect.value = today.getMonth() + 1; 
    populateDays(monthSelect.value, yearSelect.value);
    daySelect.value = today.getDate(); 

    // Add event listeners
    daySelect.addEventListener('change', validateDate);
    monthSelect.addEventListener('change', () => {
        populateDays(monthSelect.value, yearSelect.value);
        validateDate();
    });
    yearSelect.addEventListener('change', () => {
        populateDays(monthSelect.value, yearSelect.value);
        validateDate();
    });

    validateDate(); // Initial validation check
}


function populateDaystime(daySelect, month, year) {
  daySelect.innerHTML = '<option value=""></option>'; 
  const daysInMonth = new Date(year, month, 0).getDate();
  
  for (let i = 1; i <= daysInMonth; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      option.id = i;
      daySelect.add(option);
  }

}

function validateDatetime(daySelect, monthSelect, yearSelect) {
  const day = parseInt(daySelect.value, 10);
  const month = parseInt(monthSelect.value, 10) - 1; // JS months are 0-based
  const year = parseInt(yearSelect.value, 10);

  const selectedDate = new Date(year, month, day);
  const errorMsg = document.getElementById("error-message");

  // Kiểm tra ngày không hợp lệ (ví dụ: ngày 30 tháng 2)
  if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month || selectedDate.getDate() !== day) {
      errorMsg.textContent = "Ngày nhập vào không hợp lệ.";
      errorMsg.style.display = "block";
      return;
  }

  errorMsg.style.display = "none";
}

function inittime(daySelect, monthSelect, yearSelect) {
  const today = new Date();

  yearSelect.innerHTML = '<option value=""></option>';
  for (let i = today.getFullYear() - (today.getFullYear()-1986); i <= today.getFullYear() + 10; i++) { // Cho phép chọn trong 34 năm quá khứ và 10 năm tương lai
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      option.id = i;
      yearSelect.add(option);
  }

  monthSelect.innerHTML = '<option value=""></option>';
  for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      option.id = i;
      monthSelect.add(option);
  }

  daySelect.innerHTML = '<option value=""></option>';

  // Add event listeners
  daySelect.addEventListener('change', () => validateDatetime(daySelect, monthSelect, yearSelect));
  monthSelect.addEventListener('change', () => {
      populateDaystime(daySelect, monthSelect.value, yearSelect.value);
      validateDatetime(daySelect, monthSelect, yearSelect);
  });
  yearSelect.addEventListener('change', () => {
      populateDaystime(daySelect, monthSelect.value, yearSelect.value);
      validateDatetime(daySelect, monthSelect, yearSelect);
  });
}
function convertFormToJSON(form, ids) {
    var formData = {};
    ids.forEach(function(id) {
      var input = document.getElementById(id);
      if (input) {
        if (input.tagName.toLowerCase() === 'select') {
          formData[id] = input.options[input.selectedIndex].text;
        } else if (input.tagName.toLowerCase() === 'input') {
          if (input.type.toLowerCase() === 'checkbox') {
            formData[id] = input.checked ? input.value : '';
          } else {
            const style = window.getComputedStyle(input);
            if (style.textTransform === 'uppercase') {
                formData[id] = input.value.toUpperCase();
            } else {
                formData[id] = input.value;
            }
          }
        }
      }
    });

    // Ngành nghề kinh doanh
    var table = document.getElementById('table_3');
    var rows = table.getElementsByTagName('tbody')[0].rows;
    var tableData = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var rowData = [];
      rowData[0] = i+1
      rowData[1] = row.cells[1].getElementsByTagName('input')[0].value;
      rowData[2] = row.cells[2].getElementsByTagName('input')[0].value;
      rowData[3] = row.cells[3].getElementsByTagName('input')[0].checked ? 'checked' : 'unchecked';
      tableData.push(rowData);
  }

    formData['tableData'] = tableData;
    return formData;
  }

// function convertFormToJSON(form, ids) {
//   var formData = {};
//   ids.forEach(function(id) {
//     var input = document.getElementById(id);
//     if (input) {
//       if (input.tagName.toLowerCase() === 'select') {
//         formData[id] = input.options[input.selectedIndex].text;
//       } else if (input.tagName.toLowerCase() === 'input') {
//         if (input.type.toLowerCase() === 'checkbox') {
//           formData[id] = input.checked ? input.value : '';
//         } else {
//           const style = window.getComputedStyle(input);
//           if (style.textTransform === 'uppercase') {
//               formData[id] = input.value.toUpperCase();
//           } else {
//               formData[id] = input.value;
//           }
//           }
//       }
//     }
//   });
//   return formData;
// }

$(document).ready(function() {
  $('#submitBtn').click(function() {
    var form = $('#infor');
    var ids = 
    [ 
      'province',
      'date',
      'month',
      'year',
      'name',
      // Tình trạng thành lập
      'table_1',
      'company_name',
      'company_name_en',
      'company_name_short',
      'company_address',
      'company_ward',
      'company_district',
      'company_province',
      'company_phone',
      'conpany_fax',
      'company_email',
      'conpany_web',
      // Vị trí doanh nghiệp
      'table_2',
      // Doanh nghiệp xã hội/công ty chứng khoán
      'checkbox_1',
      'checkbox_2',
      'created_no',
      'created_day',
      'created_month',
      'created_year',
      // Giấy chứng nhận quyền sử dụng đất
      'checkbox_3',
      'checkbox_4',
      // Ngành nghề kinh doanh
      // 'table_3',
      'own_name',
      'own_sex',
      'dob_day',
      'dob_month',
      'dob_year',
      'kind',
      'national',
      // Loại giấy tờ pháp lý cá nhân_1
      'table_4_1',
      'id_no',
      'id_created_day',
      'id_created_month',
      'id_created_year',
      'id_created_place',
      'id_expired_day',
      'id_expired_month',
      'id_expired_year',
      'live_address',
      'live_ward',
      'live_province',
      'live_city',
      'live_nation',
      'contact_address',
      'contact_ward',
      'contact_district',
      'contact_city',
      'contact_nation',
      'contact_phone',
      'contact_email',
      'pro_no',
      'pro_date',
      'pro_month',
      'pro_year',
      'pro_gov',
      'coop_name',
      'coop_no',
      'coop_created_date',
      'coop_created_month',
      'coop_created_year',
      'coop_created_place',
      'coop_address',
      'coop_ward',  
      'coop_district',
      'coop_city',//thiếu
      'coop_nation',
      'coop_phone',
      'coop_fax',
      'coop_email',
      'coop_web',
      'pro_coop_no',
      'pro_coop_date',
      'pro_coop_month',
      'pro_coop_year',
      'pro_coop_gov',
      // Mô hình tổ chức công ty
      'table_6',
      'amount',
      'amount_word',
      'amount_foreign',
      //Hiển thị giá trị tiền tệ
      'checkbox_7',
      'checkbox_8',
      'gov_money',
      'gov_per',
      'per_money',
      'per_per',
      'for_money',
      'for_per',
      'oth_money',
      'oth_per',
      'sum',
      'sumPer',
      'vnd',
      'vndPer',
      'usd',
      'usdPer',
      'gold',
      'goldPer',
      'land',
      'landPer',
      'mind',
      'mindPer',
      'other',
      'otherPer',
      'proSum',
      'proPer',
      'preName',
      'preSex',
      'preTitle',
      'preDobDate',
      'preDobMonth',
      'preDobYear',
      'preKind',
      'preNation',
      // Loại giấy tờ pháp lý cá nhân_2
      'table_4_2',
      'preIdNo',
      'preIdDate',
      'preIdMonth',
      'preIdYear',
      'preIdPlace',
      'preIdExDate',
      'preIdExMonth',
      'preIdExYear',
      'preAdd',
      'preWard',
      'preDist',
      'preCity',
      'preLiveNation',
      'preContactAdd',
      'preContactWard',
      'preContactDist',
      'preContactCity',
      'preContactNation',
      'prePhone',
      'preEmail',
      'ceo_name',
      'ceo_phone',
      'account_name',
      'account_phone',
      'tax_address',
      'tax_ward',
      'tax_district',
      'tax_city',
      'tax_phone',
      'tax_fax',
      'tax_email',
      'start_date',
      'start_month',
      'start_year',
      // Hình thức hoạc toán
      'checkbox_9',
      'checkbox_10',
      'checkbox_11',
      'fi_start_date',
      'fi_start_month',
      'fi_end_date',
      'fi_end_month',
      'employer_count',
      // Hoạt động theo dự án BOT/BTO/BT/BOO, BLT, BTL, O&M
      'checkbox_12',
      'checkbox_13',
      // Phương pháp tính thuế
      'table_5',
      // Đăng ký sử dụng hóa đơn
      'checkbox_14',
      'checkbox_15',
      'checkbox_16',
      'checkbox_17',
      // Đóng bảo hiểm xã hội
      'table_7',
      'transName',
      'transID',
      'transNo',
      'transNoDate',
      'transNoMonth',
      'transNoYear',
      'transNoPlace',
      'famName',
      'famID',
      'famIdDate',
      'famIdMonth',
      'famIdYear',
      'famIdPlace',
      'famNo',
      'famAdd',
      'famOwnName',
      // Loại giấy tờ pháp lý cá nhân_3
      'table_4_3',
      'famOwnId',
      'famOwnIdDate',
      'famOwnIdMonth',
      'famOwnIdYear',
      'famOwnIdPlace',
      'famOwnIdExDate',
      'famOwnIdExMonth',
      'famOwnIdExYear',
      'SocialName',
      'SocialNo',
      'SocialNoDate',
      'SocialNoMonth',
      'SocialNoYear',
      'SocialNoPlace',
      'SocialNoMST',
      'SocialAdd',
      'SocialPreName',
      // Loại giấy tờ pháp lý cá nhân_4
      'table_4_4',
      'SocialPreID',
      'SocialPreIdDate',
      'SocialPreIdMonth',
      'SocialPreIdYear',
      'SocialPreIdPlace',
      'SocialPreIdExDate',
      'SocialPreIdExMonth',
      'SocialPreIdExYear',
      
    ];
    var jsonData = convertFormToJSON(form, ids);

    console.log(JSON.stringify(jsonData));

    // $.ajax({
    //   url: '//..',  
    //   type: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify(jsonData),
    //   success: function(response) {
    //     console.log('Success:', response);
    //   },
    //   error: function(error) {
    //     console.error('Error:', error);
    //   }
    // });
    

    var checkbox = document.getElementById('privacy');
    if (checkbox.checked) {
      window.location.href = "http://127.0.0.1:8000/success";
    } else {
        alert('Bạn phải đọc và đồng ý các điều khoản dịch vụ và chính sách quyền riêng tư trước khi tạo hồ sơ !');
    
    }
    
    $.ajax({
      url: '/handle_fill_data_request/',  
      type: 'POST',
      headers: {
        "X-CSRFToken": $('[name="csrfmiddlewaretoken"]').val(),
      },
      contentType: 'application/json',
      data: JSON.stringify(jsonData),
      success: function(response) {
        console.log('Success:', response);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
    
  });
});



// ID card data




