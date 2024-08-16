document.addEventListener("DOMContentLoaded", function() {
    let counter = 0
    let cart = document.querySelector(".cart img");

    cart.addEventListener("click", function(e) {
        let cartContent = document.querySelector(".cart-content");
        if (cartContent.classList.contains("fade-in")) {
            cartContent.classList.remove("fade-in");
            cartContent.classList.add("fade-out");
        } else {
            cartContent.classList.remove("fade-out");
            cartContent.classList.add("fade-in");

            counter++
            cartContent.style.zIndex = counter;

        }
    });

    let delButton = document.querySelector(".del");
    let cartInfo = document.querySelector(".cart-info");
    let emptyCart = document.querySelector(".empty-cart");

    delButton.addEventListener("click", function(e) {
        cartInfo.classList.remove("active");
        emptyCart.classList.add("active");
        document.querySelector(".image .qty").style.display = "none"

});


    let closeMenu = document.querySelector("#close-menu");
    let openMenu = document.querySelector("#open-menu");
    let links = document.querySelector("header nav ul");

    closeMenu.addEventListener("click", function(e) {
        links.classList.remove("fade-in");
        links.classList.add("fade-out");
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    });

    openMenu.addEventListener("click", function(e) {
        links.classList.remove("fade-out");
        links.classList.add("fade-in");
    
        counter++;
        links.style.zIndex = counter;
    
        closeMenu.style.display = "block";
        closeMenu.style.zIndex = "111";
        closeMenu.classList.add("fade-in");
    
        openMenu.style.display = "none";
    });
    
    let next = document.querySelector("#next");
    let previous = document.querySelector("#previous");
    let img = document.querySelector(".main-image img");
    
    var i = 1;
    
    function changeImage(nextImage) {
        i = nextImage;
        i === 5 ? i = 1 : i === 0 ? i = 4 : null;
    
        img.classList.add("fade-out");
    
        setTimeout(function() {
            img.src = `images/image-product-${i}.jpg`;
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
    
            setTimeout(function() {
                img.classList.remove('fade-in');
            }, 500);
        }, 500);
    }
    
    next.addEventListener("click", function(e) {
        changeImage(i + 1);
    });
    
    previous.addEventListener("click", function(e) {
        changeImage(i - 1);
    });
    

    let qty = document.querySelector(".count .number");
    let increment = document.querySelector(".count .increment");
    let decrement = document.querySelector(".count .decrement");
    let qtyNumber = Number(qty.textContent);

    

    increment.addEventListener("click", function(e) {
        qtyNumber++;
        qty.textContent = qtyNumber;
        console.log(qtyNumber);
    });

    decrement.addEventListener("click", function(e) {
        if (qtyNumber > 1) {
            qtyNumber--;
            qty.textContent = qtyNumber;
            console.log(qtyNumber);
        }
    });

    let addToCart = document.querySelector(".add-to-cart");
    
    addToCart.addEventListener("click", function(e) {
        let cartQty = document.querySelector(".cart-content .count");
        let price = Number(document.querySelector(".cart-content .price").textContent.substring(1));
        let totalPrice = document.querySelector(".cart-content .total-price");

        let qtyElm = document.querySelector(".image .qty span")
        document.querySelector(".image .qty").style.display = "flex"

        cartQty.textContent = `${qtyNumber}`;
        qtyElm.textContent = `${qtyNumber}`;
        totalPrice.textContent = `$${(price * qtyNumber).toFixed(2)}`;

        let cartInfo = document.querySelector(".cart-info");
        let emptyCart = document.querySelector('.empty-cart');

        cartInfo.classList.add("active");
        emptyCart.classList.remove("active");
    });

    const thumbnails = document.querySelectorAll('.product-images .images img');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(img => img.classList.remove('active'));
            
            thumbnail.classList.add('active');
            
            mainImage.classList.add("fade-out");
    
            mainImage.addEventListener('transitionend', function() {
                mainImage.src = thumbnail.src.replace('-thumbnail', '');
    
                mainImage.classList.remove('fade-out');
                mainImage.classList.add('fade-in');
    
                mainImage.addEventListener('transitionend', function() {
                    mainImage.classList.remove('fade-in');
                }, { once: true });
    
            }, { once: true });
        });
    });
    
});
