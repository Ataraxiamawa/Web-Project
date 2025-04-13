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
    });
  });
  