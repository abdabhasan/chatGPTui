document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const sidebar = document.querySelector(".sidebar-main-container");
  const closeButtonContainer = document.querySelector(
    ".close-sidebar-btn-container"
  );
  const popupDiv = document.querySelector(".close-popup");

  const newConversationBtn = document.querySelector(
    ".new-conversation-btn-link-pencile-icon"
  );
  const newChatPopup = document.querySelector(".new-chat-popup");
  const dallNewChat = document.querySelector(".dall-e-new-icon");
  const logoCreatorNewChat = document.querySelector(".logo-creator-new-icon");

  function updateButtonState() {
    if (sidebar.classList.contains("open")) {
      closeButtonContainer.classList.add("sidebar-open");
      closeButtonContainer.classList.remove("sidebar-closed");
    } else {
      closeButtonContainer.classList.add("sidebar-closed");
      closeButtonContainer.classList.remove("sidebar-open");
    }
  }

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    updateButtonState();
    // Optionally, toggle the button state attribute
    const isClosed =
      toggleBtn.querySelector("span").getAttribute("data-state") === "closed";
    toggleBtn
      .querySelector("span")
      .setAttribute("data-state", isClosed ? "open" : "closed");

    // Adjust the CSS variable for sidebar width
    if (sidebar.classList.contains("open")) {
      document.documentElement.style.setProperty("--sidebar-width", "260px");
      closeButtonContainer.style.transform =
        "translateX(260px) translateY(-50%) rotate(0deg) translateZ(0px)";
      popupDiv.textContent = "Close sidebar";
    } else {
      document.documentElement.style.setProperty("--sidebar-width", "0px");
      closeButtonContainer.style.transform =
        "translateY(-50%) rotate(0deg) translateZ(0px)";
      popupDiv.textContent = "Open sidebar";
    }
  });

  newConversationBtn.addEventListener("mouseenter", function () {
    newChatPopup.style.top = "0px";
    newChatPopup.style.display = "inline";
  });

  newConversationBtn.addEventListener("mouseleave", function () {
    newChatPopup.style.display = "none";
  });

  dallNewChat.addEventListener("mouseenter", function () {
    newChatPopup.style.top = "40px";
    newChatPopup.style.display = "inline";
  });

  dallNewChat.addEventListener("mouseleave", function () {
    newChatPopup.style.display = "none";
  });

  logoCreatorNewChat.addEventListener("mouseenter", function () {
    newChatPopup.style.top = "85px";
    newChatPopup.style.display = "inline";
  });

  logoCreatorNewChat.addEventListener("mouseleave", function () {
    newChatPopup.style.display = "none";
  });

  updateButtonState();
});
