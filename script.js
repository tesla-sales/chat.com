import { showPage } from './pageManager.js';
import { handleUsernameInput, handleProceedClick } from './usernameFlow.js';
import { handlePasswordInput, handleGetStartedClick } from './passwordFlow.js';
import { handleMessageInput, handleSendClick, appendMessage } from './chatFlow.js';
import { loadUsers } from './storage.js';

let currentUsername = null;

export function setCurrentUsername(username) {
    currentUsername = username;
}

export function getCurrentUsername() {
    return currentUsername;
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('splash-page');
    setTimeout(() => {
        showPage('username-page');
    }, 3000);

    loadUsers();

    const usernameInput = document.getElementById('username-input');
    const proceedButton = document.getElementById('proceed-button');
    usernameInput.addEventListener('input', () => handleUsernameInput(usernameInput, proceedButton));
    proceedButton.addEventListener('click', () => handleProceedClick(usernameInput));

    const passwordInput = document.getElementById('password-input');
    const getStartedButton = document.getElementById('get-started-button');
    passwordInput.addEventListener('input', () => handlePasswordInput(passwordInput, getStartedButton));
    getStartedButton.addEventListener('click', () => handleGetStartedClick(usernameInput, passwordInput));

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    messageInput.addEventListener('input', () => handleMessageInput(messageInput, sendButton));
    sendButton.addEventListener('click', () => handleSendClick(messageInput, sendButton));

    const chatPage = document.getElementById('chat-page');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                const isHidden = chatPage.classList.contains('hidden');
                if (!isHidden && mutation.oldValue.includes('hidden')) {
                    appendMessage("Welcome to GG-Chat! Type a message below to get started.", false, "Admin Bot");
                    observer.disconnect();
                }
            }
        });
    });

    observer.observe(chatPage, { attributes: true, attributeOldValue: true });
});