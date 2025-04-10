document.getElementById('generate').addEventListener('click', function() {
    const optionsText = document.getElementById('options').value.trim();
    const resultDiv = document.getElementById('result');

    if (!optionsText) {
        resultDiv.textContent = "Please enter some options!";
        return;
    }

    const options = optionsText.split(',').map(option => option.trim()).filter(option => option !== '');
    
    if (options.length === 0) {
        resultDiv.textContent = "Please enter valid options!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    const decision = options[randomIndex];
    resultDiv.textContent = `Your choice: ${decision}`;
});