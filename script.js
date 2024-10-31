document.querySelector('.post-button').addEventListener('click', function() {
    const input = document.querySelector('.post-input');
    const postsContainer = document.querySelector('.posts');
    
    if (input.value.trim() !== "") {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `<h3>اسم المستخدم</h3><p>${input.value}</p>`;
        postsContainer.appendChild(newPost);
        input.value = ''; // مسح المحتوى بعد النشر
    } else {
        alert("الرجاء كتابة نص البوست!");
    }
});
