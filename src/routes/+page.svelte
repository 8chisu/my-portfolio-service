<script lang="ts">
	import { skills } from '$lib/data/skills';
</script>

<div class="container">
	<h2>Skills</h2>

	<ul class="list-group">
		{#each skills as skill}
			<li class="list-group-item">{skill}</li>
		{/each}
	</ul>
</div>
