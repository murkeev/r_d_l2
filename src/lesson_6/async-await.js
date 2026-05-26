function displayPost(post) {
    console.log(`[Post #${post.id}] ${post.title}`);
    console.log(`Author (userId): ${post.userId}`);
    console.log(`Body: ${post.body}`);
    console.log('--------------------');
}

export async function fetchPostAsyncAwait(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    const post = await response.json();
    displayPost(post);
}