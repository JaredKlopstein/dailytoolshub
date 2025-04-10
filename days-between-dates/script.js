document.getElementById('calculate').addEventListener('click', function() {
    const startInput = document.getElementById('start-date').value;
    const endInput = document.getElementById('end-date').value;
    const startDate = new Date(startInput);
    const endDate = new Date(endInput);
    const resultDiv = document.getElementById('result');

    if (!startInput || !endInput) {
        resultDiv.innerHTML = "<p>Please select both dates!</p>";
        return;
    }

    const diffTime = Math.abs(endDate - startDate);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // Use raw input values to avoid timezone shifts
    const startFormatted = new Date(startInput + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const endFormatted = new Date(endInput + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    resultDiv.innerHTML = `
        <p class="total-days">${totalDays} days</p>
        <p>${weeks} weeks and ${remainingDays} days</p>
        <p class="date-range">${startFormatted} → ${endFormatted}</p>
    `;
});