document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("input[name='name']").value.trim();
      const phone = form.querySelector("input[name='phone']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();
      const petInfo = form.querySelector("textarea[name='petInfo']").value.trim();
  
      if (name.length < 3) {
        alert("الاسم يجب أن يكون 3 أحرف على الأقل.");
        e.preventDefault();
      } else if (!email.includes("@")) {
        alert("يرجى إدخال بريد إلكتروني صالح.");
        e.preventDefault();
      } else if (phone.length !== 10 || isNaN(phone)) {
        alert("رقم الجوال يجب أن يكون 10 أرقام.");
        e.preventDefault();
      } else if (petInfo.length < 10) {
        alert("يرجى إدخال معلومات كافية عن الحيوان الأليف.");
        e.preventDefault();
      } else if (message.length < 5) {
        alert("يرجى إدخال رسالة لا تقل عن 5 أحرف.");
        e.preventDefault();
      }

      else if (form.querySelector("input[name='animalType']")) {
        const animalType = form.querySelector("input[name='animalType']").value.trim();
        const animalAge = form.querySelector("input[name='animalAge']").value.trim();
        const gender = form.querySelector("select[name='gender']").value;
        const vaccinated = form.querySelector("select[name='vaccinated']").value;
        const symptoms = form.querySelector("textarea[name='symptoms']").value.trim();
        const symptomStartDate = form.querySelector("input[name='symptomStartDate']").value;
  
        if (animalType === "") {
          alert("يرجى إدخال نوع الحيوان.");
          e.preventDefault();
        } else if (animalAge === "" || isNaN(animalAge) || parseInt(animalAge) < 0) {
          alert("يرجى إدخال عمر الحيوان بشكل صحيح.");
          e.preventDefault();
        } else if (gender !== "male" && gender !== "female") {
          alert("يرجى تحديد جنس الحيوان.");
          e.preventDefault();
        } else if (vaccinated !== "yes" && vaccinated !== "no") {
          alert("يرجى تحديد ما إذا كان الحيوان مطعّمًا.");
          e.preventDefault();
        } else if (symptoms.length < 5) {
          alert("يرجى إدخال وصف واضح للأعراض (5 أحرف على الأقل).");
          e.preventDefault();
        } else if (!symptomStartDate) {
          alert("يرجى إدخال تاريخ ظهور الأعراض.");
          e.preventDefault();
        }
      }
    });
  });
  