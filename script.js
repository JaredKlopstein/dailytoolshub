document.addEventListener('DOMContentLoaded', function() {
    // Nav toggle
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
    });

    // Tools data
    const tools = [
        { name: "Random Decision Maker", description: "Struggling to choose? Enter options and get a random pick instantly.", link: "/dailytoolshub/random-decision-maker", emoji: "🎲" },
        { name: "Word Counter", description: "Count words and characters in your text instantly.", link: "/dailytoolshub/word-counter", emoji: "📝" },
        { name: "Days Between Dates", description: "Calculate the number of days between two dates.", link: "/dailytoolshub/days-between-dates", emoji: "📅" },
        { name: "Random Password Generator", description: "Generate a secure password with custom options.", link: "/dailytoolshub/random-password-generator", emoji: "🔒" }
    ];

    const toolsGrid = document.getElementById('tools-grid');
    const searchInput = document.getElementById('tool-search');

    // Function to render tools
    function renderTools(toolList) {
        toolsGrid.innerHTML = ''; // Clear existing content
        if (toolList.length === 0) {
            // Display centered no-results message
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'col-span-full text-center text-gray-600 py-8';
            noResultsDiv.innerHTML = `
                <p class="text-xl mb-4">No tools match your search yet.</p>
                <p>Please <a href="/dailytoolshub/feedback" class="text-purple-600 hover:underline">suggest one</a>!</p>
            `;
            toolsGrid.appendChild(noResultsDiv);
        } else {
            // Render tool cards
            toolList.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'bg-gray-50 p-8 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-lg';
                toolCard.innerHTML = `
                    <div class="text-4xl mb-4">${tool.emoji}</div>
                    <h2 class="text-xl font-bold mb-3">${tool.name}</h2>
                    <p class="text-gray-600">${tool.description}</p>
                    <a href="${tool.link}" class="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">Try It <span class="ml-1">→</span></a>
                `;
                toolsGrid.appendChild(toolCard);
            });
        }
    }

    // Initial render
    renderTools(tools);

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.description.toLowerCase().includes(query)
        );
        renderTools(filteredTools);
    });
});