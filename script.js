const togglePopup = () => {
  setPopupVisible(!popupVisible);
};let swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 5,
});

// window scroll

window.addEventListener(scroll, () => {
  document.querySelector(".profile-popup").style.display = "none";
  document.querySelector(".add-post-popup").style.display = "none";
  document.querySelector(".theme-customize").style.display = "none";
});

// start aside

let menuItem = document.querySelectorAll(".menu-item");
// active class remove

const removeActive = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

document.querySelector("#messageMenu").addEventListener("click", () => {
  document.querySelector("#notifycounter2").style.display = "none";
  document.querySelector(".messages").classList.toggle("boxshadow1");
  setTimeout(() => {
    document.querySelector(".messages").classList.remove("boxshadow1");
  }, 3000);
});

// start friend request
let Accept = document.querySelectorAll(".Accept");
let Delete = document.querySelectorAll(".Delete");
Accept.forEach((accept) => {
  accept.addEventListener("click", () => {
    accept.parentElement.parentElement.style.display = "none";
    accept.parentElement.parentElement.querySelector(".alert").style.display =
      "block";
  });
});

Delete.forEach((del) => {
  del.addEventListener("click", () => {
    del.parentElement.parentElement.style.display = "none";
  });
});

// start profile popup

document.querySelectorAll("#my-profile-picture").forEach((AllProfile) => {
  AllProfile.addEventListener("click", () => {
    document.querySelector(".profile-popup").style.display = "flex";
  });
});

document.querySelectorAll(".close").forEach((AllCloser) => {
  AllCloser.addEventListener("click", () => {
    document.querySelector(".profile-popup").style.display = "none";
    document.querySelector(".add-post-popup").style.display = "none";
    document.querySelector(".theme-customize").style.display = "none";
  });
});

document.querySelector("#profile-upload").addEventListener("change", () => {
  document
    .querySelectorAll("#my-profile-picture img")
    .forEach((AllMyProfileImg) => {
      AllMyProfileImg.src = URL.createObjectURL(
        document.querySelector("#profile-upload").files[0]
      );
    });
});

//start add post popup
document.querySelector("#create-lg").addEventListener("click", () => {
  document.querySelector(".add-post-popup").style.display = "flex";
});

document.querySelector("#feed-pic-upload").addEventListener("change", () => {
  document.querySelector("#postImg").src = URL.createObjectURL(
    document.querySelector("#feed-pic-upload").files[0]
  );
});

//start add story

document.querySelector("#add-story").addEventListener("change", () => {
  document.querySelector(".story img").src = URL.createObjectURL(
    document.querySelector("#add-story").files[0]
  );
  document.querySelector(".add-story").style.display = "none";
});

// mini button post input
document.querySelector(".mini-button").addEventListener("click", () => {
  document.querySelector(".input-post").classList.add("boxshadow1");
  setTimeout(() => {
    document.querySelector(".input-post").classList.remove("boxshadow1");
  }, 3000);
});

document.querySelector(".mini-button").addEventListener("dblclick", () => {
  document.querySelector(".add-post-popup").style.display = "flex";
});

//liked button
document
  .querySelectorAll(".action-button span:first-child i")
  .forEach((liked) => {
    liked.addEventListener("click", () => {
      liked.classList.toggle("liked");
    });
  });

// bookmark button
const bookmarkButton = document.querySelectorAll(".bkmark");
bookmarkButton.forEach((markbtn) => {
  markbtn.addEventListener("click", () => {
    markbtn.classList.toggle("bookmarked");
  });
});

//theme customize
document.querySelector("#theme").addEventListener("click", () => {
  // document.querySelector(".theme-customize").style.display = "flex";
  const themeCustomize = document.querySelector(".theme-customize");

  // Toggle display of the theme customize popup
  if (
    themeCustomize.style.display === "none" ||
    themeCustomize.style.display === ""
  ) {
    themeCustomize.style.display = "flex"; // Show the theme customization options
  } else {
    themeCustomize.style.display = "none"; // Hide the customization options if already visible
  }
});

// font size

let fontSizeOptions = document.querySelectorAll(".choose-size span");
const removeSelectorActive = () => {
  fontSizeOptions.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizeOptions.forEach((sizeOption) => {
  sizeOption.addEventListener("click", () => {
    removeSelectorActive();
    sizeOption.classList.add("active");

    let fontSize;
    if (sizeOption.classList.contains("font-size-1")) {
      fontSize = "10px";
    } else if (sizeOption.classList.contains("font-size-2")) {
      fontSize = "13px";
    } else if (sizeOption.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (sizeOption.classList.contains("font-size-4")) {
      fontSize = "19px";
    } else if (sizeOption.classList.contains("font-size-5")) {
      fontSize = "22px";
    }

    // Apply font size to the root HTML element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//  primary color

let colorpallete = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");

const removeActiveColor = () => {
  colorpallete.forEach((color) => {
    color.classList.remove("active");
  });
};

colorpallete.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    removeActiveColor();
    color.classList.add("active");
    if (color.classList.contains("color-1")) {
      Hue = 252;
    } else if (color.classList.contains("color-2")) {
      Hue = 52;
    } else if (color.classList.contains("color-3")) {
      Hue = 352;
    } else if (color.classList.contains("color-4")) {
      Hue = 152;
    } else if (color.classList.contains("color-5")) {
      Hue = 202;
    }
    root.style.setProperty("--primary-color-hue", Hue);
  });
});

// bg color

let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");

let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;
const changebg = () => {
  root.style.setProperty("--color-dark-light-theme", darkColorLightTheme);
  root.style.setProperty("--color-light-light-theme", lightColorLightTheme);
  root.style.setProperty("--color-white-light-theme", whiteColorLightTheme);
};
bg2.addEventListener("click", () => {
  lightColorLightTheme = "5%";
  whiteColorLightTheme = "10%";
  darkColorLightTheme = "95%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bgicon();
  changebg();
});

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg2.classList.remove("active");
  window.location.reload();
});

let menuItemImg = document.querySelectorAll(".menu-item span img");

const bgicon = () => {
  menuItemImg.forEach((icon) => {
    icon.classList.add("icon-bg");
  });
};


document
  .getElementById("profileform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("add-post").value;
    const imgSrc = document.getElementById("postImg").src;

    const postData = {
      title: title,
      imgSrc: imgSrc,
    };

  
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Post saved successfully!");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });


function loadPosts() {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        console.log(`Title: ${post.title}, Image: ${post.imgSrc}`);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


loadPosts();



