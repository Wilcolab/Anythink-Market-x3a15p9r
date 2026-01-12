// filepath: /workspaces/Anythink-Market-x3a15p9r/comment.js

// Example function that returns a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, message: 'Data fetched successfully' });
        }, 2000);
    });
}

// Async function using await
async function getComments(commentUrl) {
    try {
        console.log('Fetching comments...');
        const data = await fetchData(commentUrl);
        console.log('Comments received:', data);
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

// Multiple async operations with await
async function processMultipleRequests() {
    try {
        const comment1 = await fetchData('/api/comments/1');
        const comment2 = await fetchData('/api/comments/2');
        const comment3 = await fetchData('/api/comments/3');
        
        return [comment1, comment2, comment3];
    } catch (error) {
        console.error('Error processing requests:', error);
    }
}

// Using Promise.all with async/await
async function fetchAllCommentsParallel() {
    try {
        const results = await Promise.all([
            fetchData('/api/comments/1'),
            fetchData('/api/comments/2'),
            fetchData('/api/comments/3')
        ]);
        console.log('All comments:', results);
        return results;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Main execution
async function main() {
    await getComments('/api/comments');
    await fetchAllCommentsParallel();
}

main();