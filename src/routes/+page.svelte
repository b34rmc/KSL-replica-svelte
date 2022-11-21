<script>
	import moment from 'moment';
	export let data;
	console.log(data);
	let articles = data.articles;
	let heroArticle = articles[0];
	let sliceStart = 2;
	let sliceEnd = 4;
	let featuredArticles = articles.slice(sliceStart, sliceEnd);
	let articleList = articles.slice(4, 23);
</script>

<div class="flex justify-center items-center w-full sm:w-[94%] sm:mx-auto z-0 relative mt-8">
	<div class="flex flex-col justify-center items-center mt-10 w-[96%] sm:w-[94%] bg-white">
		<div
			style="background-image: url({heroArticle.urlToImage});"
			class="bg-no-repeat bg-cover bg-center w-full text-left sm:text-left flex justify-start sm:justify-end items-end sm:items-start h-60"
		>
			<p
				class="text-white text-2xl sm:text-lg w-full sm:w-1/3 h-fit sm:h-full pl-6 pr-12 py-2 bg-black/30 sm:bg-[#333] font-sans font-bold"
			>
				<a href={heroArticle.url}>{heroArticle.title} </a>
			</p>
		</div>
		<div
			class="flex justify-around items-start w-[96%] h-fit border-b border-dotted border-gray-400 py-4"
		>
			{#each featuredArticles as article}
				<div class="flex flex-col justify-start items-center w-54 h-full">
					<a href={article.url}>
						<img class="w-52 h-28 sm:w-44 sm:h-20" src={article.urlToImage} alt="featured-img" />
						<p class="text-base font-sans font-bold text-left w-52 sm:w-44">{article.title}</p>
					</a>
				</div>
			{/each}
		</div>
		<div class="flex justify-start text-left w-full">
			<p class="text-left text-lg font-semibold text-black pl-2 pb-6">LATEST NEWS & FEATURES</p>
		</div>
		<div class="">
			{#each articleList as article}
				<div class="flex justify-between border-2 border-blue-700">
					<figure
						class="float-left relative w-[21.70vw] h-[17.53vh] bg-blue-400 border-2 border-black-700"
					>
						<a href={article.url}>
							<picture class="min-w-[21.70vw] h-fit bg-blue-300 ">
								<img
									src={article.urlToImage}
									alt="img"
									class="min-w-full min-h-fit bg-center bg-cover bg-blend-normal bg-no-repeat border-2 border-red-700"
								/>
							</picture>
						</a>
					</figure>
					<!-- <div class="float-right">
						<h2 class="text-base">
							<a href={article.url}>{article.title}</a>
						</h2>
						<h4 class="">
							{moment(article.publishedAt).format('lll')}
						</h4>
					</div> -->
				</div>
			{/each}
		</div>
	</div>
</div>
