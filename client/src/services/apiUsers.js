const API_URL = "http://localhost/api";

export async function createUser(data) {
    try {
        const res = await fetch(`${API_URL}/user/create`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed create new user");
    } catch (error) {
        throw Error("Error creating user: " + error);
    }
}

export async function getUsers() {
    const res = await fetch(`${API_URL}/user/get-all`);
    if (!res.ok) throw Error("Failed getting users");
    return await res.json();
}

export async function getUser(id) {
    const res = await fetch(`${API_URL}/user/get/${id}`);
    if (!res.ok) throw Error("Failed getting user");
    return await res.json();
}

export async function updateUser(id, data) {
    try {
        const res = await fetch(`${API_URL}/user/update/${id}`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (!res.ok) throw Error("Failed getting user");
    } catch (error) {
        throw Error("Error updating user: " + error);
    }
}