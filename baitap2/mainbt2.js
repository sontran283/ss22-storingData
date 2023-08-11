// Function to add a new bookmark
function addBookmark(event) {
    event.preventDefault();

    const urlInput = document.getElementById('url-input');
    const url = urlInput.value;

    if (url) {
        const bookmark = { url: url };
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        urlInput.value = '';
        renderBookmarks();
    }
}

// Function to remove a bookmark
function removeBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    renderBookmarks();
}

// Function to render the bookmarks
function renderBookmarks() {
    const bookmarkList = document.getElementById('bookmark-list');
    bookmarkList.innerHTML = '';

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    bookmarks.forEach((bookmark, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = bookmark.url;
        link.textContent = bookmark.url;
        listItem.appendChild(link);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBookmark(index);
        });
        listItem.appendChild(removeButton);

        bookmarkList.appendChild(listItem);
    });
}

// Event listener for form submission
const bookmarkForm = document.getElementById('bookmark-form');
bookmarkForm.addEventListener('submit', addBookmark);

// Initial rendering of bookmarks
renderBookmarks();