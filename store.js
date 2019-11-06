/* eslint-disable no-unused-vars */
'use strict';

const store = (function() {


  function addBookmark(bookmark) {
    this.bookmarks.push(bookmark);
  }

  
  function findBookmark(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  }


  function editBookmark(id, newData) {
    const updateBookmark = this.findBookmark(id);
    Object.assign(updateBookmark, newData);
  }

  
  function deleteBookmark(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  }

  
  function setFilter(filter) {
    this.filteredBy = filter;
  }

  
  function setExpandState(id, isExpanded) {
    const bookmark = this.findBookmark(id);
    bookmark.expanded = isExpanded;
  }

 
  function setIsEditingState(id, isEditing) {
    const bookmark = this.findBookmark(id);
    bookmark.isEditing = isEditing;
  }

  
  function setAddingBookmarkState(isAdding) {
    this.addingBookmark = isAdding;
  }

  return {
    bookmarks: [],
    filteredBy: 0,
    addingBookmark: false,
    showError: false,
    errorMessage: '',
    addBookmark,
    findBookmark,
    editBookmark,
    deleteBookmark,
    setFilter,
    setIsEditingState,
    setAddingBookmarkState,
    setExpandState,
  };
})();