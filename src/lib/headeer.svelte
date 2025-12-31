<script lang="ts">
	import GithubLogo from '$lib/assets/icon/mark-github-16.svg';
	const startYear: number = 2025;
	const currentYear: number = new Date().getFullYear();
	const yearText: string =
		startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
</script>

<footer class="p-3 grid grid-rows-1 grid-cols-3 place-items-center juborder-b border-amber-950 bg-amber-50 font-body">
    <div class="">
        
    </div>
    <div class="grid w-fit place-items-center">
        <div class="grid-rows-2 place-items-center">
            <div class="grid-col-1 grid-rows-2 min-w-fit items-end rounded-2xl bg-amber-950 px-5 py-2 text-amber-50">
                <p class="pl-0.5 text-4xl">
                    <code class="font-code">MyPort</code>
                </p>
                <p class="-mt-2.5 pr-1 text-right">{yearText}</p>
            </div>
            <p class="-mt-1 pr-1 text-center min-w-fit">by 8chisu</p>
        </div>
    </div>
    <div class="grid mt-10 mr-50">
        <a href="https://google.com" class="grid-rows-2 grid-cols-1 place-items-center">
            <img class="h-8 w-8 mr-3" alt="Github Logo" src={GithubLogo} />
            <p class="h-5 w-40 text-center">
                Githubはこちら！
            </p>
	    </a>
    </div>
</footer>
