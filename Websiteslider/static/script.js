document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const commentInput = document.querySelector(".comment-input");
    const submitButton = document.querySelector(".submit-comment");
    const commentsContainer = document.querySelector(".comments-container");
    const characterCount = document.querySelector(".character-count");
    const loginBtn = document.querySelector(".login-btn");
  
    // Constants
    const MAX_CHARS = 5000;
    const STORAGE_KEY = "dreamscape_comments";
  
    // Initial State
    let comments = loadComments() || [
      {
        id: 1,
        text: "The ancient oak whispered tales of centuries past, its leaves rustling with memories of countless travelers who had sought shelter beneath its mighty branches. As I stood there, I could feel the weight of history and the whispers of the wind sharing secrets untold.",
        author: "Forest Dreamer",
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
        likes: 234,
        isLiked: false,
        replies: [
          {
            id: 11,
            author: "Mountain Writer",
            text: "This is beautifully written! I love how you've captured the timeless nature of the forest.",
            timestamp: new Date(Date.now() - 3600000), // 1 hour ago
            likes: 45,
            isLiked: false,
          },
        ],
      },
    ];
  
    // Initialize App
    function initialize() {
      setupEventListeners();
      renderComments();
      updateCharacterCount();
    }
  
    // Event Listeners
    function setupEventListeners() {
      // Comment input character count
      commentInput.addEventListener("input", updateCharacterCount);
  
      // Submit comment
      submitButton.addEventListener("click", handleCommentSubmit);
  
      // Comment actions (delegation)
      commentsContainer.addEventListener("click", handleCommentActions);
  
      // Save comments before page unload
      window.addEventListener("beforeunload", () => {
        saveComments(comments);
      });
  
      // Login button
      loginBtn.addEventListener("click", () => {
        // Add login functionality here
        console.log("Login clicked");
      });
    }
  
    // ... (Include the rest of your JavaScript code here, ensuring all functions are properly closed and syntax errors are fixed)
  
    // Call the initialize function to start the app
    initialize();
  }); // End of DOMContentLoaded
  