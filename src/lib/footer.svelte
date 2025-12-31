<script lang="ts">
	const startYear: number = 2025;
	const currentYear: number = new Date().getFullYear();
	const yearText: string =
		startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
</script>

<footer class="border-t border-y-amber-950 bg-amber-50 font-body text-xs text-yellow-950">
	<div class="inner m-5 flex flex-col items-center gap-3">
		<p class="disclaimer text-center text-xs">
			本サイトは学習および技術検証を目的として制作されています。
		</p>
		<p>
		    <span class="en">
				This website is created for learning and technical demonstration purposes.
			</span>
		</p>
		<p class="name text-xs">&copy; {yearText} by 8chisu. All rights reserved.</p>
	</div>
</footer>