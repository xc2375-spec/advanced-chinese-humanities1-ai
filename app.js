document.addEventListener("DOMContentLoaded", () => {
  console.log("Advanced Chinese for Humanities (I) AI loaded.");

  const siteData = {
    siteShortName: "ACH1 AI",
    siteTitle: "Advanced Chinese for Humanities (I)",
    siteTitleZh: "人文天下：高级汉语教程·上",
    siteSubtitle:
      "AI-assisted learning platform for advanced Chinese language and humanities exploration",
    currentLesson: {
      id: "1-0",
      titleZh: "天·地·人",
      titleEn: "Heaven, Earth, and Humanity"
    }
  };

  // Optional: update page title if needed
  if (document.title.trim() === "") {
    document.title = siteData.siteTitle + " AI";
  }

  // Smoothly mark external placeholders if needed later
  const placeholderLinks = document.querySelectorAll('a[href="#"]');
  placeholderLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("This section is coming soon.");
    });
  });

  // Highlight current nav section on scroll
  const navLinks = document.querySelectorAll(".top-nav a[href^='#']");
  const sections = [...navLinks]
    .map((link) => {
      const id = link.getAttribute("href");
      return document.querySelector(id);
    })
    .filter(Boolean);

  if (sections.length > 0 && navLinks.length > 0) {
    const onScroll = () => {
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSectionId = `#${section.id}`;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === currentSectionId;
        link.style.color = isActive ? "var(--primary)" : "";
        link.style.fontWeight = isActive ? "700" : "";
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  // Reusable helper for future pages
  window.ACH1 = {
    siteData,
    showComingSoon(message = "This section is coming soon.") {
      alert(message);
    }
  };
});
