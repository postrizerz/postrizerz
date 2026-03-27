// مسك العناصر
const sizeBtns = document.querySelectorAll('.size-btn');
const colorBtns = document.querySelectorAll('.color-btn');
const priceDisplay = document.getElementById('price-display');
const imageUpload = document.getElementById('image-upload');
const userImage = document.getElementById('user-image');
const frameOverlay = document.getElementById('frame-overlay'); 

// 1. تغيير المقاس والسعر البريميم
if(sizeBtns) {
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const newPrice = btn.getAttribute('data-price');
            if(priceDisplay) {
                priceDisplay.style.opacity = '0';
                priceDisplay.style.transform = 'translateY(5px)';
                
                setTimeout(() => {
                    priceDisplay.innerText = newPrice;
                    priceDisplay.style.opacity = '1';
                    priceDisplay.style.transform = 'translateY(0)';
                }, 250);
            }
        });
    });
}

// 2. تغيير لون الفريم PVC
if(colorBtns) {
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedColor = btn.getAttribute('data-color');
            if(frameOverlay) {
                if(selectedColor === 'white') {
                    frameOverlay.style.borderColor = '#f5f5f5'; 
                } else {
                    frameOverlay.style.borderColor = '#000000'; 
                }
            }
        });
    });
}

// 3. رفع الصورة (نعومة في التحميل)
if(imageUpload && userImage) {
    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                userImage.style.opacity = '0'; 
                setTimeout(() => {
                    userImage.src = event.target.result;
                    userImage.style.opacity = '1'; 
                }, 300);
            };
            reader.readAsDataURL(file);
        }
    });
}

// 4. الأسئلة الشائعة
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if(questionBtn) {
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const answer = item.querySelector('.faq-answer');
            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                if(otherItem.querySelector('.faq-answer')) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            if (!isActive && answer) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    }
});

// 5. بناء المعرض
const galleryContainer = document.getElementById('dynamic-gallery');
function renderGallery() {
    if (!galleryContainer) return; 

    let htmlContent = '';
    postersData.forEach(poster => {
        htmlContent += `
            <a href="product.html?title=${encodeURIComponent(poster.title)}&img=${encodeURIComponent(poster.image)}" class="poster-card" data-category="${poster.category}">
                <div class="card-img-wrapper">
                    <img src="${poster.image}" alt="${poster.title}" loading="lazy">
                </div>
                <div class="card-info">
                    <h4>${poster.title}</h4>
                    <span>يبدأ من ${poster.price} ج.م</span>
                </div>
            </a>
        `;
    });
    galleryContainer.innerHTML = htmlContent;
}
renderGallery();

// 6. الفلترة
const filterButtons = document.querySelectorAll('.filter-btn');
const posterCards = document.querySelectorAll('.poster-card');
if(filterButtons) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            posterCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                
                setTimeout(() => {
                    card.classList.add('hidden');
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    }
                }, 300);
            });
        });
    });
}

// ==========================================
// 7. نظام الطلب للـ Custom Frame (الصفحة الرئيسية)
// ==========================================
const customOrderBtn = document.getElementById('custom-order-btn');

if(customOrderBtn) {
    customOrderBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        try {
            const name = document.getElementById('custom-name').value;
            const phone = document.getElementById('custom-phone').value;
            const address = document.getElementById('custom-address').value;
            const imageUploadInput = document.getElementById('image-upload');

            if(!name || !phone || !address) {
                alert('عشان خاطري يا قناص املأ بيانات الشحن كلها الأول! 😅');
                return;
            }

            const uploadedImage = imageUploadInput ? imageUploadInput.files[0] : null;

            const currentPriceText = document.getElementById('price-display').innerText;
            const totalPriceNum = parseInt(currentPriceText);
            const depositAmount = totalPriceNum / 2;

            const selectedSize = document.querySelector('.right-controls .size-btn.active').innerText;
            const selectedColor = document.querySelector('.right-controls .color-btn.active').getAttribute('data-color');

            const orderData = {
                posterTitle: "Custom Design (صورة العميل)",
                size: selectedSize,
                color: selectedColor,
                totalPrice: totalPriceNum,
                deposit: depositAmount,
                name: name,
                phone: phone,
                address: address,
                imgUrl: uploadedImage ? "صورة خاصة (العميل هيبعتها واتساب)" : "لم يرفع صورة (هيبعتها واتساب)"
            };

            const originalText = customOrderBtn.innerText;
            customOrderBtn.innerText = "جاري إرسال الطلب... ⏳";
            customOrderBtn.disabled = true;

            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJ1OgO6eRZCKzrLhDxpXJq4NlH-jGYRvO58mf3NUcpGbMi2Pm9iSSahUVMlQ5O2IeZ/exec"; 

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // دي اللي بتخلي GitHub وجوجل ميضربوش ايرور
                body: JSON.stringify(orderData)
            })
            .then(() => {
                customOrderBtn.innerText = originalText;
                customOrderBtn.disabled = false;
                document.getElementById('deposit-amount-custom').innerText = depositAmount;
                document.getElementById('payment-popup-custom').style.display = 'flex';
            })
            .catch(error => {
                console.error(error);
                customOrderBtn.innerText = originalText;
                customOrderBtn.disabled = false;
                document.getElementById('deposit-amount-custom').innerText = depositAmount;
                document.getElementById('payment-popup-custom').style.display = 'flex';
            });

        } catch (err) {
            alert("في مشكلة صغيرة: " + err.message);
        }
    });

    const closePopupBtn = document.getElementById('close-popup-custom');
    if(closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            document.getElementById('payment-popup-custom').style.display = 'none';
        });
    }
}