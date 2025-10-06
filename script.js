

// ===== CATEGORY DROPDOWN =====
  const categoryBtn = document.getElementById("categoryBtn");
  const categoryList = document.getElementById("categoryList");

  categoryBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    categoryList.style.display =
      categoryList.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!categoryBtn.contains(e.target) && !categoryList.contains(e.target)) {
      categoryList.style.display = "none";
    }
  });

  // ==== MOBILE MENU TOGGLE ====
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainMenu = document.getElementById("mainMenu");

  mobileMenuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mainMenu.contains(e.target)) {
      mainMenu.classList.remove("show");
    }
  });



// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

// ===== BANNER SLIDER =====
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let slideInterval;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });
}

const startAutoSlide = () => {
  if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 4000);
  }
};

const resetInterval = () => {
  clearInterval(slideInterval);
  startAutoSlide();
};

startAutoSlide();

// ===== QUICK VIEW MODAL =====
const quickViews = document.querySelectorAll(".quick-view");
const modal = document.getElementById("quickViewModal");
const closeBtn = document.querySelector(".close");

if (modal && closeBtn && quickViews.length > 0) {
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");

  quickViews.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector(".price").innerText;

      modalImg.src = imgSrc;
      modalTitle.innerText = title;
      modalPrice.innerText = price;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

// ===== ADD TO CART & QUANTITY =====
const addCartBtns = document.querySelectorAll(".add-cart-btn");

if (addCartBtns.length > 0) {
  addCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const qtySelector = card.querySelector(".quantity-selector");

      btn.style.display = "none";
      qtySelector.style.display = "flex";

      const decreaseBtn = qtySelector.querySelector(".decrease");
      const increaseBtn = qtySelector.querySelector(".increase");
      const qtySpan = qtySelector.querySelector(".qty");

      decreaseBtn.addEventListener("click", () => {
        let qty = parseInt(qtySpan.innerText);
        if (qty > 1) qty--;
        qtySpan.innerText = qty;
      });

      increaseBtn.addEventListener("click", () => {
        let qty = parseInt(qtySpan.innerText);
        qty++;
        qtySpan.innerText = qty;
      });
    });
  });
}
