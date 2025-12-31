<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/footer.svelte';
	import Headeer from '$lib/headeer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon}></svelte:head>
<div>
    <Headeer />
    <main class="flex min-h-screen flex-col bg-amber-100">
        <div class="flex-1 bg-white">
		{@render children()}
	</div>
	<Footer />
    </main>
</div>