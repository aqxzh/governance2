<script lang="ts">
	import Hero from '#lib/components/site/Hero.svelte';
	import ContoursSection from '#lib/components/site/ContoursSection.svelte';
	import TeamSection from '#lib/components/site/TeamSection.svelte';
	import Seo from '#lib/components/site/Seo.svelte';
	import LandingSections from '#lib/components/site/LandingSections.svelte';
</script>

<Seo />
<main id="main" tabindex="-1">
	<Hero />
	<ContoursSection />
	<TeamSection />
	<LandingSections />
</main>
