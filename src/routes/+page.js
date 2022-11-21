export async function load() {
	const response = await fetch(
		'https://newsapi.org/v2/everything?q=apple&from=2022-10-22&to=2022-10-22&sortBy=popularity&apiKey=3fc77587e72d40fd9bc7e4d367f188a5'
	);
	const data = await response.json();
	let articles = data.articles;
	return {
		articles
	};
}
