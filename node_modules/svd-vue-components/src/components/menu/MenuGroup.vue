<template>
	<ul :class="module + '__list'">
		<slot></slot>
	</ul>
</template>

<script>
	export default{
	  name: 'menu-group',
		props: [],
		data() {
			return{
				module: 'nav'
			}
		},
		created(){
			if(this.$parent.$attrs.module){
				this.module = this.$parent.$attrs.module;
			}
		}
	}
</script>
