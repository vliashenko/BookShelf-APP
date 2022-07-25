const BASE_URL = "http://localhost:4000";

async function FetchWithErrorHandling( url = "", config = {} ) {
    const response = await fetch(url, config);
    return response.ok 
    ? await response.json()
    : Promise.reject(new Error("Not found"))
}

export function fetchAuthors() {
    return FetchWithErrorHandling(`${BASE_URL}/authors?_embed-books`);
};

export function fetchBooks() {
    return FetchWithErrorHandling(`${BASE_URL}/books`);
};

export function fetchBookById(bookId) {
    return FetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`)
}