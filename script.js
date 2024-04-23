document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.animated-button');

    button.addEventListener('click', async function() {
        const txt = document.querySelector('#txt').value.toUpperCase();
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${txt}`;
        const response = await fetch(url);
        const data = await response.json();
        const info = document.querySelector(".word-info");

        // Check if the API returned any data
        if (data && data.length > 0) {
            const word = data[0].word.toUpperCase();
            const meaning = data[0].meanings[0].definitions[0].definition;
            const example = data[0].meanings[0].definitions[0].example;
            const synonyms = data[0].meanings[0].definitions[0].synonyms;

            info.innerHTML = `<h1>Word: <span>${word}</span></h1>
                              <p>Meaning: <span>${meaning}</span></p>
                              <p>Example: <span>${example}</span></p>
                              <p>Synonyms: <span>${synonyms.join(', ')}</span></p>`;
        } else {
            info.innerHTML = "<p>No results found for the entered word.</p>";
        }
    });
});
