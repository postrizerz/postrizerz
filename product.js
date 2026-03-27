// 1. بنقرا الرابط اللي العميل فاتحه
const urlParams = new URLSearchParams(window.location.search);

// 2. بنسحب اسم البوستر ومسار الصورة من الرابط
const posterTitle = urlParams.get('title');
const posterImgUrl = urlParams.get('img');

// 3. بنحقن الداتا دي في عناصر الـ HTML بتاعتنا
if(posterTitle && posterImgUrl) {
    document.getElementById('dynamic-title').innerText = posterTitle;
    document.getElementById('dynamic-image').src = posterImgUrl;
} else {
    // لو حد فتح الصفحة من غير لينك مباشر، نرجعه للصفحة الرئيسية
    window.location.href = 'index.html'; 
}