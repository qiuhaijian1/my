<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
　　　　　　<Nvigation></Nvigation>
　　　　　　<router-view/>
	</div>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
import Nvigation  from  './components/Nvigation.vue'
export default {
	
  name: 'App',
    components: { Nvigation},	

	}

</script>

<style>
#app {

  margin:-8px;
}
</style>
