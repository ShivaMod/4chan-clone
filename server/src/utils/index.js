module.exports = {

   /**
   * Get any string and make convert it to slug form.
   */
  createSlug: function (text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  }
}
