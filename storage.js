const USERS_STORAGE_KEY = 'ggchat_users';

export function loadUsers() {
    try {
        const usersString = localStorage.getItem(USERS_STORAGE_KEY);
        return usersString ? JSON.parse(usersString) : {};
    } catch (e) {
        console.error("Error loading users from localStorage:", e);
        return {}; // Return empty object on error
    }
}

export function saveUsers(users) {
    try {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
        console.error("Error saving users to localStorage:", e);
    }
}

export function getUsers() {
    return loadUsers();
}

export function saveUser(username, password) {
    const users = loadUsers();
    // Note: Saving password in localStorage is insecure. This is for demonstration only.
    users[username] = { password: password };
    saveUsers(users);
}

