<template>
	
	<div>

		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<a class="navbar-brand" href="/">{{ appName }}</a>
			<div class="collapse navbar-collapse">
						<ul class="navbar-nav ml-auto">
			        <li class="nav-item">
			          <router-link class="nav-link" to="/">Home</router-link>
			        </li>
			        <li class="nav-item">
			          <router-link class="nav-link" to="/about">About</router-link>
			        </li>
			      </ul>
			</div>
		</nav>
		
		<router-view></router-view>

	</div>

</template>
<script>
	export default {
		data() {
			return {
				appName: 'WebPack Demo App'
			}
		}
	}
</script>