import { showPage } from './pageManager.js';
import { saveUser } from './storage.js';
import { setCurrentUsername } from './script.js'; // Import the setter

export function handlePasswordInput(passwordInput, getStartedButton) {
    const password = passwordInput.value;

    if (password.length === 6) {
        getStartedButton.classList.remove('hidden');
    } else {
        getStartedButton.classList.add('hidden');
    }
}

export function handleGetStartedClick(usernameInput, passwordInput) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Save the new user (username and password) - Note: localStorage is not secure for passwords
    saveUser(username, password);

    // Store the current username
    setCurrentUsername(username);

    // Transition to chat page
    showPage('chat-page');
    // Clear inputs
    usernameInput.value = '';
    passwordInput.value = '';
}