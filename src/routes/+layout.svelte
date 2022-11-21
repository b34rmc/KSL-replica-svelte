<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="h-[100%] flex flex-col w-full">
	<div class="bg-[rgb(22,77,143)] sm:bg-white flex flex-col justify-between h-[100%] w-full">
		<div>
			<Navbar />
			<slot />
		</div>
		<div>
			<Footer />
		</div>
		\
	</div>
</div>
