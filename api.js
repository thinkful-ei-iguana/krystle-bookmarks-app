let api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/krystle/bookmarks';
 

  function apiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) error = { code: res.status };

        return res.json();
      })
      .then(resJson => {
        if (error) {
          console.log(resJson.message)
          error.message = resJson.message;
          return Promise.reject(error);
        }

        return resJson;
      });
  }


  function verifyHTTPS(url) {
    if (!/^(f|ht)tps?:\/\//.test(url)) {
      url = 'http://' + url;
    }
    return url;
  }

  function createBookmark(newBookmark) {
  
    let bookmark = {
    
    };

    if(newBookmark.title) bookmark.title = newBookmark.title.trim();
    if(newBookmark.url) bookmark.url = verifyHTTPS(newBookmark.url);


    (newBookmark.desc && newBookmark.desc !== null) ? Object.assign(bookmark, { desc: newBookmark.desc }) : bookmark;
    newBookmark.rating ? Object.assign(bookmark, { rating: newBookmark.rating }) : bookmark;

    return apiFetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookmark)
    });
  }

  function getBookmarks() {
    return apiFetch(`${BASE_URL}/bookmarks`);
  }

  function updateBookmark(id, updateData) {
    return apiFetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
  }

  function deleteBookmark(id) {
    return apiFetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'DELETE',
    });
  }

  return {
    createBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark
  };
})();