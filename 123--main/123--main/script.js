function f1(){("/sproductf1.html"); }
function f2(){ ("/sproductf2.html"); }
function f3(){ goToProduct("sproductf3.html"); }
function f4(){ goToProduct("sproductf4.html"); }
function f5(){ goToProduct("sproductf5.html"); }
function f6(){ goToProduct("sproductf6.html"); }
function f7(){ goToProduct("sproductf7.html"); }
function f8(){ goToProduct("sproductf8.html"); }
function n1(){ goToProduct("sproductn1.html"); }
function n2(){ goToProduct("sproductn2.html"); }
function n3(){ goToProduct("sproductn3.html"); }
function n4(){ goToProduct("sproductn4.html"); }
function n5(){ goToProduct("sproductn5.html"); }
function n6(){ goToProduct("sproductn6.html"); }
function n7(){ goToProduct("sproductn7.html"); }
function n8(){ goToProduct("sproductn8.html"); }
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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Server error");
    }
    return res.json();
  })
  .then(data => {
    console.log("User added:", data);
    alert("You have signed up successfully!");
    emailInput.value = "";
    if (typeof Getusers === "function") {
      Getusers();
    }
  })
  .catch(error => {
    console.error(error);
    alert("Signup failed. Please try again later.");
  });
}



function logo(){ location.href = "index.html"; }
function explore(){ location.href = "shop.html"; }
function shop(){ location.href = "shop.html"; }
function cart(){ location.href = "cart.html"; }
function blog(){ location.href = "blog.html"; }
function about(){ location.href = "about.html"; }
function contact(){ location.href = "contact.html"; }
function signup(){ location.href = "index.html#newsteller"; }
function facebook(){ location.href = "https://www.facebook.com/"; }
function twitter(){ location.href = "https://twitter.com/"; }
function instagram(){ location.href = "https://www.instagram.com/"; }
function pinterest(){ location.href = "https://www.pinterest.com/"; }
function youtube(){ location.href = "https://www.youtube.com/"; }
function appstore(){ location.href = "https://apps.apple.com/"; }
function googleplay(){ location.href = "https://play.google.com/"; }
function payment(){ location.href = "https://www.paypal.com/"; }


