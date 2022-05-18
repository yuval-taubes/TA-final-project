//Modal
const modal1 = document.getElementById("modal");
const modal2 = document.getElementById("modal-2");
const acceptAllButton = document.getElementById("accept-all");
const managePrefButton = document.getElementById("manage");
const savePrefButton = document.getElementById("save-pref");
const browserCheckBox = document.getElementById("browser");
const operatingSystemCheckBox = document.getElementById("OS");
const screenWidthCheckBox = document.getElementById("screen-width");
const screenHeightCheckBox = document.getElementById("screen-height");
const infoText = document.getElementById("info-text");

//Delay
if (navigator.cookieEnabled && !document.cookie) {
  setTimeout(() => {
    modal1.style.display = "flex";
  }, 1000);
}

//if count is 4 then create cookie for no values
let count = 0;

//buttons
acceptAllButton.addEventListener("click", () => {
  modal1.style.display = "none";
  checkAll();
  infoText.innerText = "All Cookies Enabled";
  console.log(document.cookie);
});

managePrefButton.addEventListener("click", () => {
  modal1.style.display = "none";
  modal2.style.display = "flex";
});

savePrefButton.addEventListener("click", () => {
  modal2.style.display = "none";
  checkAll();
  if (count > 0 && count < 4) {
    infoText.innerText = "Some Cookies Are enabled";
  } else if (count == 0) {
    infoText.innerText = "No Cookies Enabled";
  } else if (count == 4) {
    infoText.innerText = "All Cookies Disabled";
  }
  console.log(document.cookie);
});

function checkAll() {
  browser();
  operatingSystem();
  screenWidth();
  screenHeight();
  if (count == 4) {
    setCookie("Reject", true);
  }
}

//browser cookie
function browser() {
  if (browserCheckBox.checked) {
    setCookie("Browser", getBrowser());
  } else {
    count += 1;
  }
}

function operatingSystem() {
  if (operatingSystemCheckBox.checked) {
    let userOS = navigator.platform;
    setCookie("Operating-System", userOS);
  } else {
    count += 1;
  }
}

function screenWidth() {
  if (screenWidthCheckBox.checked) {
    setCookie("Width", window.innerWidth);
  } else {
    count += 1;
  }
}

function screenHeight() {
  if (screenHeightCheckBox.checked) {
    setCookie("Height", window.innerHeight);
  } else {
    count += 1;
  }
}

function getBrowser() {
  let userAgent = navigator.userAgent;
  let browserName = "";

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  }

  return browserName;
}

//Set Cookies Function
function setCookie(name, value) {
  let limit = new Date();
  limit.setSeconds(limit.getSeconds() + 10);
  limit = limit.toUTCString();

  const options = {
    path: "/",
    SameSite: "Lax",
    expires: limit,
  };
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
