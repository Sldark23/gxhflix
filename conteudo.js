function loadContent(tag) {
    fetch('conteudo.json')
        .then(response => response.json())
        .then(content => {
            var filteredContent = content.filter(item => item.tags.includes(tag));

            var contentHtml = '<ul>';
            filteredContent.forEach(item => {
                contentHtml += `
                    <li>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <ul>
                            ${item.episodes.map(episode => `
                                <li>
                                    <h4>${episode.title}</h4>
                                    <iframe width="560" height="315" src="${episode.youtube_embed_url}" frameborder="0" allowfullscreen></iframe>
                                </li>
                            `).join('')}
                        </ul>
                    </li>
                `;
            });
            contentHtml += '</ul>';

            document.getElementById('content').innerHTML = contentHtml;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}