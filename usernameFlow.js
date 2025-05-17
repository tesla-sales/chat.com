import { showPage } from './pageManager.js';
import { getUsers } from './storage.js';

export function handleUsernameInput(usernameInput, proceedButton) {
    const username = usernameInput.value.trim();
    const errorMessage = document.getElementById('username-error');
    errorMessage.textContent = ''; // Clear previous errors

    if (username.length > 4) {
        proceedButton.classList.remove('hidden');
    } else {
        proceedButton.classList.add('hidden');
    }
}

export function handleProceedClick(usernameInput) {
    const username = usernameInput.value.trim();
    const users = getUsers();
    const errorMessage = document.getElementById('username-error');

    if (users[username]) {
        // Username exists
        errorMessage.textContent = 'Account already exists with this username.';
    } else {
        // Username does not exist, proceed to password page
        errorMessage.textContent = ''; // Clear error
        showPage('password-page');
    }
}

