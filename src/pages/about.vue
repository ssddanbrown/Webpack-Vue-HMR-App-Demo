<template>
	<div>
		<div class="text-center text-white py-5 bg-info">
			<h2>About this Demo</h2>
		</div>
		<div class="container py-5 text-center">
			<p>
				This demo uses webpack, vue, vue-router & sass.
				<br>
				The page content for routes is fetched via dynamic imports since this is split out to lower initial bundle size.
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'about'
	}
</script>