const UNKNOWN_SERVICE = 'https://non-existent-service-xyz.io/api/posts/1';
const FALLBACK_SERVICE = 'https://jsonplaceholder.typicode.com/posts/1';

export async function fetchWithFallback() {
    let response;

    try {
        response = await fetch(UNKNOWN_SERVICE);
    } catch {
        console.warn('Primary service unavailable, redirecting to fallback...');

        try {
            response = await fetch(FALLBACK_SERVICE);
        } catch (fallbackError) {
            throw new Error(`Both services failed. Reason: ${fallbackError.message}`);
        }
    }

    const data = await response.json();
    console.log('Received data:', data);
    console.log('--------------------');
    return data;

}