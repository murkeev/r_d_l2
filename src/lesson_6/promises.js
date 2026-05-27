function displayPost(post) {
    console.log(`[Post #${post.id}] ${post.title}`);
    console.log(`Author (userId): ${post.userId}`);
    console.log(`Body: ${post.body}`);
    console.log('--------------------');
}

export function fetchPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then((post) => {
            displayPost(post);
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
}

