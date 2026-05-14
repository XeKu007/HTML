function goToProduct(page) {
  location.href = page;
}
function f1() {
  goToProduct("sproductf1.html");
}
function f2() {
  goToProduct("sproductf2.html");
}
function f3() {
  goToProduct("sproductf3.html");
}
function f4() {
  goToProduct("sproductf4.html");
}
function f5() {
  goToProduct("sproductf5.html");
}
function f6() {
  goToProduct("sproductf6.html");
}
function f7() {
  goToProduct("sproductf7.html");
}
function f8() {
  goToProduct("sproductf8.html");
}
function n1() {
  goToProduct("sproductn1.html");
}
function n2() {
  goToProduct("sproductn2.html");
}
function n3() {
  goToProduct("sproductn3.html");
}
function n4() {
  goToProduct("sproductn4.html");
}
function n5() {
  goToProduct("sproductn5.html");
}
function n6() {
  goToProduct("sproductn6.html");
}
function n7() {
  goToProduct("sproductn7.html");
}
function n8() {
  goToProduct("sproductn8.html");
}



function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch (e) {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function findCartItemIndex(cart, id, size) {
  return cart.findIndex((item) => item.id === id && item.size === size);
}
function addToCart(item) {
  const cart = getCart();
  const idx = findCartItemIndex(cart, item.id, item.size);
  if (idx > -1) {
    cart[idx].quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveCart(cart);
  alert("Item added to cart.");
  console.log("addToCart", item);
}

function addToCartWithQuantity(customQuantity = null) {
  const details = document.querySelector(".single-pro-details");

  if (!details) {
    addToCart({
      id: "unknown",
      name: "Product",
      price: 0,
      image: "",
      size: "",
      quantity: customQuantity ?? 1,
    });
    return;
  }

  const id = details.dataset.productId || Math.random().toString(36).slice(2, 9);

  const name = (
    details.querySelector("h4")?.textContent ||
    details.querySelector("h5")?.textContent ||
    "Product"
  ).trim();

  const priceText = details.querySelector("h2")?.textContent || "0";
  const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;

  const image = document.getElementById("MainImg")?.src || "";

  const size = details.querySelector("select")?.value || "";

  let qty;
  if (customQuantity !== null) {
    qty = customQuantity;
  } else {
    qty = parseInt(details.querySelector('input[type="number"]')?.value || "1", 10) || 1;
  }

  addToCart({ id, name, price, image, size, quantity: qty });
}
for (let i = 1; i <= 16; i++) {
  window[`add${i}`] = function() {
    addToCartWithQuantity(i);
  };
}
function updateQuantity(id, size, quantity) {
  const cart = getCart();
  const idx = findCartItemIndex(cart, id, size);
  if (idx > -1) {
    cart[idx].quantity = quantity;
    if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    saveCart(cart);
    renderCart();
  }
}
function removeFromCart(id, size) {
  const cart = getCart().filter(
    (item) => !(item.id === id && item.size === size)
  );
  saveCart(cart);
  renderCart();
}
function calculateTotals(couponCode) {
  const cart = getCart();
  let subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  let discount = 0;
  if (couponCode === "SAVE10") discount = subtotal * 0.1;
  else if (couponCode === "SAVE20") discount = 20;
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
}
function renderCart() {
  const tbody = document.getElementById("cart-table");
  if (!tbody) return;
  const cart = getCart();
  tbody.innerHTML = "";
  cart.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><a href="#" class="remove-item" data-id="${item.id}" data-size="${
      item.size
    }"><i class="far fa-times-circle"></i></a></td>
      <td><img src="${item.image}" alt="" style="max-width:100px"></td>
      <td>${item.name}${
      item.size ? "<br><small>Size: " + item.size + "</small>" : ""
    }</td>
      <td>$${item.price.toFixed(2)}</td>
      <td><input type="number" class="qty-input" value="${
        item.quantity
      }" min="1" data-id="${item.id}" data-size="${item.size}"></td>
      <td class="item-subtotal">$${(item.price * item.quantity).toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll(".remove-item").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.dataset.id;
      const size = a.dataset.size;
      removeFromCart(id, size);
    });
  });
  tbody.querySelectorAll(".qty-input").forEach((inp) => {
    inp.addEventListener("change", () => {
      const id = inp.dataset.id;
      const size = inp.dataset.size;
      const qty = parseInt(inp.value, 10) || 1;
      updateQuantity(id, size, qty);
      const row = inp.closest("tr");
      const priceText =
        row.querySelector("td:nth-child(4)").textContent || "$0";
      const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
      row.querySelector(".item-subtotal").textContent =
        "$" + (price * qty).toFixed(2);
      updateTotalsDisplay();
    });
  });
  updateTotalsDisplay();
}
function updateTotalsDisplay() {
  const couponCode = document.getElementById("coupon-code")?.value || "";
  const totals = calculateTotals(couponCode);
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountEl = document.getElementById("discount-amount");
  const totalEl = document.getElementById("cart-total");
  if (subtotalEl) subtotalEl.textContent = "$" + totals.subtotal.toFixed(2);
  if (discountEl) discountEl.textContent = "$" + totals.discount.toFixed(2);
  if (totalEl) totalEl.textContent = "$" + totals.total.toFixed(2);
}
function applyCoupon() {
  const code = document.getElementById("coupon-code")?.value.trim() || "";
  const msg = document.getElementById("coupon-message");
  if (!code) {
    if (msg) {
      msg.textContent = "Please enter a coupon code.";
      msg.style.color = "red";
    }
    return;
  }
  if (code === "SAVE10" || code === "SAVE20") {
    if (msg) {
      msg.textContent = "Coupon applied.";
      msg.style.color = "green";
    }
  } else {
    if (msg) {
      msg.textContent = "Invalid coupon.";
      msg.style.color = "red";
    }
  }
  updateTotalsDisplay();
}
function proceed() {
  const cart = getCart();
  const phone = document.getElementById("phone")?.value.trim();
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }
  if (!phone) {
    alert("Please enter your phone number.");
    return;
  }
  alert("Checkout successful — order placed!");
  localStorage.removeItem("cart");
  fetch("http://localhost:3000/PlaceOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart, phone }),
  })
  renderCart();
  updateTotalsDisplay();
}

function SignUp() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  if (email === "") {
    alert("Please enter your email address.");
    return;
  }
  if (!gmailRegex.test(email)) {
    alert("Your email is wrong. Please use Gmail.");
    return;
  }
  fetch("http://localhost:3000/SignUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server error");
      }
      return res.json();
    })
    .then((data) => {
      console.log("User added:", data);
      alert("You have signed up successfully!");
      emailInput.value = "";
      if (typeof Getusers === "function") {
        Getusers();
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Signup failed. Please try again later.");
    });
}

async function Submit(event) {
  if (event) event.preventDefault();

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');

    if (!nameEl || !emailEl || !subjectEl || !messageEl) {
      console.error('Олдсонгүй:', {nameEl, emailEl, subjectEl, messageEl});
      alert('Форм элемент олдсонгүй! Console харна уу.');
      return;
    }

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();

    if (!name || !email || !subject || !message) {
      alert('Бүх талбарыг бөглөнө үү!');
      return;
    }

    alert('Бүгд зөв! Энд fetch хийж болно :)');
    fetch("http://localhost:3000/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Message sent:", data);
        nameEl.value = "";
        emailEl.value = "";
        subjectEl.value = "";
        messageEl.value = "";
      })
      .catch((error) => {
        console.error(error);
        alert("Message sending failed. Please try again later.");
      });
  }
document.querySelector('#submit button').addEventListener('click', Submit);

function app(){
  location.href = "https://play.google.com/store/games";
}
function logo() {
  location.href = "index.html";
}
function explore() {
  location.href = "shop.html";
}
function shop() {
  location.href = "shop.html";
}
function cart() {
  location.href = "cart.html";
}
function blog() {
  location.href = "blog.html";
}
function about() {
  location.href = "about.html";
}
function contact() {
  location.href = "contact.html";
}
function signup() {
  location.href = "index.html#newsteller";
}
function facebook() {
  location.href = "https://www.facebook.com/";
}
function twitter() {
  location.href = "https://twitter.com/";
}
function instagram() {
  location.href = "https://www.instagram.com/";
}
function pinterest() {
  location.href = "https://www.pinterest.com/";
}
function youtube() {
  location.href = "https://www.youtube.com/";
}
function appstore() {
  location.href = "https://apps.apple.com/";
}
function googleplay() {
  location.href = "https://play.google.com/";
}
function payment() {
  location.href = "https://www.paypal.com/";
}

// // 1. renderCart() автоматаар дуудагдахгүй байгааг засах (cart.html ачаалагдахад ажиллана)
//   document.addEventListener("DOMContentLoaded", function () {
//     if (document.getElementById("cart-table")) {
//       renderCart();
//     }
//   });
// // 2. proceed() функц доторх асинхрон алдааг засах (захиалга илгээгдэж байж сагс хоосолно)
// async function proceed() {
//   const cart = getCart();
//   const phone = document.getElementById("phone")?.value.trim();

//   if (!cart.length) {
//     alert("Your cart is empty.");
//     return;
//   }
//   if (!phone) {
//     alert("Please enter your phone number.");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:3000/PlaceOrder", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cart, phone }),
//     });

//     if (!response.ok) {
//       throw new Error("Server error");
//     }

//     alert("Checkout successful — order placed!");
//     localStorage.removeItem("cart");
//     renderCart();
//     updateTotalsDisplay();
//   } catch (error) {
//     console.error(error);
//     alert("Order failed. Please try again.");
//   }
// }
// // 3. Бүтээгдэхүүний ID random үүсгэхийг болиулж, илүү найдвартай болгох
// function addToCartWithQuantity(customQuantity = null) {
//   const details = document.querySelector(".single-pro-details");
//   if (!details) return;

//   // dataset.productId байхгүй бол filename-аас ID гаргаж авна (жишээ: sproductf1.html → f1)
//   let id = details.dataset.productId;
//   if (!id) {
//     const path = window.location.pathname;
//     const filename = path.split('/').pop(); // sproductf1.html
//     id = filename.replace("sproduct", "").replace(".html", ""); // f1, n3 гэх мэт
//   }

//   // Бусад хэсэг ижил хэвээр...
//   const name = (details.querySelector("h4")?.textContent || details.querySelector("h5")?.textContent || "Product").trim();
//   const priceText = details.querySelector("h2")?.textContent || "0";
//   const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
//   const image = document.getElementById("MainImg")?.src || "";
//   const size = details.querySelector("select")?.value || "";

//   let qty = customQuantity ?? parseInt(details.querySelector('input[type="number"]')?.value || "1", 10) || 1;

//   addToCart({ id, name, price, image, size, quantity: qty });
// }

// // 6. updateTotalsDisplay() купонтой зөв ажиллах болгох
// function updateTotalsDisplay() {
//   const couponInput = document.getElementById("coupon-code");
//   const couponCode = couponInput ? couponInput.value.trim().toUpperCase() : "";
  
//   const totals = calculateTotals(couponCode);

//   const subtotalEl = document.getElementById("cart-subtotal");
//   const discountEl = document.getElementById("discount-amount");
//   const totalEl = document.getElementById("cart-total");

//   if (subtotalEl) subtotalEl.textContent = "$" + totals.subtotal.toFixed(2);
//   if (discountEl) discountEl.textContent = "$" + totals.discount.toFixed(2);
//   if (totalEl) totalEl.textContent = "$" + totals.total.toFixed(2);
// }

// // 7. applyCoupon() функцыг илүү сайн болгох
// function applyCoupon() {
//   const couponInput = document.getElementById("coupon-code");
//   const msg = document.getElementById("coupon-message");
//   if (!couponInput || !msg) return;

//   const code = couponInput.value.trim().toUpperCase();

//   if (!code) {
//     msg.textContent = "Please enter a coupon code.";
//     msg.style.color = "red";
//     return;
//   }

//   if (code === "SAVE10" || code === "SAVE20") {
//     msg.textContent = "Coupon applied successfully!";
//     msg.style.color = "green";
//   } else {
//     msg.textContent = "Invalid coupon code.";
//     msg.style.color = "red";
//   }

//   updateTotalsDisplay(); // Купон хэрэглэсний дараа шууд шинэчлэнэ
// }
// // 8. SignUp() алдааг илүү сайн зохицуулах
// function SignUp() {
//   const emailInput = document.getElementById("email");
//   if (!emailInput) return;

//   const email = emailInput.value.trim();
//   const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

//   if (!email) {
//     alert("Please enter your email address.");
//     return;
//   }
//   if (!gmailRegex.test(email)) {
//     alert("Please use a valid Gmail address.");
//     return;
//   }

//   fetch("http://localhost:3000/SignUp", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email }),
//   })
//   .then(res => {
//     if (!res.ok) return res.json().then(err => { throw err; });
//     return res.json();
//   })
//   .then(data => {
//     alert("You have signed up successfully!");
//     emailInput.value = "";
//     if (typeof Getusers === "function") Getusers();
//   })
//   .catch(err => {
//     console.error(err);
//     const message = err.message || "Signup failed. Please try again.";
//     alert(message);
//   });
// }
// 9. Font Awesome зөв CDN (2025 оны байдлаар ажилладаг хувилбар)
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />