const API_URL = "http://localhost/api";

export async function upload(file) {
    try {
        const res = await fetch(`${API_URL}/upload/create`, {
            method: "POST",
            body: file,
        });
        if (!res.ok) throw Error("Failed upload pdf file");
    } catch (error) {
        throw Error("Error uploading file: " + error);
    }
}

export async function getUploads() {
    const res = await fetch(`${API_URL}/upload/get-all`);
    if (!res.ok) throw Error("Failed getting files");
    return await res.json();
}

export async function getUpload(id) {
    const res = await fetch(`${API_URL}/upload/get/${id}`);
    if (!res.ok) throw Error("Failed getting file");

    const {data} = await res.json();
    return data;
}

export async function send(id) {
    try {
        const res = await fetch(`${API_URL}/upload/send/${id}`, {
            method: "POST"
        });
        if (!res.ok) throw Error("Failed send pdf file");
    } catch (error) {
        throw Error("Error uploading file: " + error);
    }
}