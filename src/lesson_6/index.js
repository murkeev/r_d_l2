import {fetchPost} from "./promises.js";
import {fetchPostAsyncAwait} from "./async-await.js";
import {fetchWithFallback} from "./try-catch.js";

console.log('--------------------');
fetchPost(10);

try {
    await fetchPostAsyncAwait(1);
} catch (err) {
    console.error('Fatal error:', err.message);
}

try {
    await fetchWithFallback();
} catch (err) {
    console.error('Fatal error:', err.message);
}