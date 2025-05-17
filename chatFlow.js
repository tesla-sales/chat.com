import { showPage } from './pageManager.js';
import { getUsers } from './storage.js';
import { getCurrentUsername } from './script.js';

// Helper function to append a message to the chat
export function appendMessage(text, isOutgoing, username) {
    const chatMessages = document.getElementById('chat-messages');

    // Create the message container
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', isOutgoing ? 'outgoing' : 'incoming');

    // Create the username element
    const usernameElement = document.createElement('div');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    // Create the message bubble element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-bubble', isOutgoing ? 'outgoing' : 'incoming');
    messageElement.textContent = text;

    // Append username and bubble to the container
    messageContainer.appendChild(usernameElement);
    messageContainer.appendChild(messageElement);

    // Append container to chat area
    chatMessages.appendChild(messageContainer);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

export function handleMessageInput(messageInput, sendButton) {
    const message = messageInput.value.trim();

    if (message.length > 0) {
        sendButton.classList.remove('hidden');
    } else {
        sendButton.classList.add('hidden');
    }
}

export function handleSendClick(messageInput, sendButton) {
    const messageText = messageInput.value.trim();
    const currentUsername = getCurrentUsername();

    if (messageText && currentUsername) {
        // Use the new appendMessage function
        appendMessage(messageText, true, currentUsername);

        // Clear input and hide send button
        messageInput.value = '';
        sendButton.classList.add('hidden');

        // Simulate an incoming message after a short delay for demonstration
        setTimeout(() => {
            appendMessage("Received your message!", false, "Admin Bot");
        }, 1000);
    }
}