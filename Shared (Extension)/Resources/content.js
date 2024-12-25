function removeSkipButton() {
  // Function to remove the button if it exists
  const removeButton = () => {
    // Find all buttons on the page
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
      if (button.textContent.trim() === 'Skip') {
          button.disabled = true;
          button.style.display = 'none';
      }
    });
  };

  // Initial button removal
  removeButton();

  // Set up a MutationObserver to detect future changes to the DOM
  const observer = new MutationObserver(() => {
    removeButton(); // Re-check for the skip button if DOM changes
  });

  // Start observing the body for added or removed child nodes
  observer.observe(document.body, { childList: true, subtree: true });
}

// Call the function on page load
removeSkipButton();
