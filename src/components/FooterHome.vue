<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="copyright-text">Copyright@2025 Youth Centre Association</p>
      <!-- <div class="social-icons">
        <a href="#" target="_blank" aria-label="YouTube">
          <img src="/images/youtube.png" alt="YouTube" class="social-icon youtube-icon" />
        </a>
        <a href="#" target="_blank" aria-label="Facebook">
          <img src="/images/facebook.png" alt="Facebook" class="social-icon facebook-icon" />
        </a>
        <a href="#" target="_blank" aria-label="Telegram">
          <img src="/images/telegram.png" alt="Telegram" class="social-icon telegram-icon" />
        </a>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.app-footer {
  background-color: #000; /* Black background as per image */
  color: #fff; /* White text color */
  padding: 20px 40px; /* Padding top/bottom and left/right */
  border-top-left-radius: 20px; /* Rounded top-left corner */
  border-top-right-radius: 20px; /* Rounded top-right corner */
  margin-top: 50px; /* Add some space above the footer */
}

.footer-content {
  display: flex;
  justify-content: center; 
  align-items: center; /* Vertically centers items */
  max-width: 1200px; /* Optional: limit width of content */
  margin: 0 auto; /* Center content within max-width */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.copyright-text {
  font-size: 0.9em;
  margin: 0; /* Remove default paragraph margin */
  flex-shrink: 0; /* Prevent it from shrinking too much */
  text-align: center; /* Center text on small screens */
}

.social-icons {
  display: flex;
  gap: 15px; /* Space between icons */
  flex-shrink: 0; /* Prevent icons from shrinking */
}

.social-icon {
  width: 50px; /* Size of social icons */
  height: 50px;
  border-radius: 5px; /* Slight rounded corners for icons */
  object-fit: contain; /* Ensure icon fits within its container */
}

/* Basic hover effect for social icons */
.social-icons a:hover .social-icon {
  opacity: 0.8;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

youtube-icon {
  widows: 100%; /* YouTube red */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-footer {
    padding: 20px; /* Adjust padding for smaller screens */
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .footer-content {
    flex-direction: column; /* Stack content vertically */
    gap: 15px; /* Space between stacked items */
  }

  .copyright-text {
    margin-bottom: 10px; /* Space below copyright text */
  }
}
</style>