<script lang="ts">
  import GithubIcon from "$lib/assets/icon/mark-github-16.svg"
	const startYear: number = 2025;
	const currentYear: number = new Date().getFullYear();
	const yearText: string =
		startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
</script>

<footer class="flex flex-col items-center font-body p-4 border-b border-amber-950 bg-amber-50">
    <div class="px-5 py-2 flex flex-col items-end w-fit text-amber-50 bg-amber-950 rounded-2xl">
        <p class="text-4xl pl-0.5">
		<code class = "font-code">MyPort</code>
        </p>
        <p class="flex pr-1 -mt-2.5">{yearText}</p>
    </div>
    <p class="pr-1 -mt-1 text-center">by 8chisu</p>
    <GithubIcon/>
</footer>
