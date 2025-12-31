<script lang="ts">
	import GithubLogo from '$lib/assets/icon/mark-github-16.svg';
	const startYear: number = 2025;
	const currentYear: number = new Date().getFullYear();
	const yearText: string =
		startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
</script>

<footer class="p-3 grid grid-cols-5 grid-rows-[auto_50px] place-items-center juborder-b border-amber-950 bg-amber-50 font-body">
    <div></div>
    <div></div>
    <div class="grid-col-1 grid-rows-2 min-w-fit rounded-2xl bg-amber-950 px-5 py-2 text-amber-50">
        <p class="pl-0.5 text-4xl">
            <code class="font-code">MyPort</code>
        </p>
        <p class="-mt-2.5 pr-1 text-right">{yearText}</p>
    </div>
    <div class="h-10"></div>
    <div class="h-10"></div>
    <div class="h-10"></div>
    <div class="h-10"></div>
    <div>
		<a  href="https://google.com"
		    class="mt-5 grid grid-cols-1 grid-rows-[auto_20px] justify-items-center items-end">
            <img class="h-8 w-8 min-h-fit" alt="Github Logo" src={GithubLogo} />
            <span class="text-center">
                Github
            </span>
        </a>
    </div>
    <div class="h-10"></div>
    <div class="h-10"></div>
</footer>
