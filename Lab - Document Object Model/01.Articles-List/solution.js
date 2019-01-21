function solve() {
	let articleElement = document.getElementById('articles');
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	let title = titleElement.value;
	let content = contentElement.value;

	if (title && content) {
		let createArticleElement = document.createElement('article');
		let createTitleElement = document.createElement('h3');
		let createContentElement = document.createElement('p');

		createTitleElement.textContent = title;
		createContentElement.textContent = content;

		createArticleElement.appendChild(createTitleElement)
		createArticleElement.appendChild(createContentElement);

		articleElement.appendChild(createArticleElement);

		titleElement.value = '';
		contentElement.value = '';
	}
}