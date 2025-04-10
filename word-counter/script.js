document.getElementById('count').addEventListener('click', function() {
    console.log('hello')
    const text = document.getElementById('input-text').value;
    const wordCount = document.getElementById('word-count');
    const charCountWithSpaces = document.getElementById('char-count-with-spaces');
    const charCountNoSpaces = document.getElementById('char-count-no-spaces');

    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    // Character counts
    charCountWithSpaces.textContent = text.length;
    charCountNoSpaces.textContent = text.replace(/\s/g, '').length;
});