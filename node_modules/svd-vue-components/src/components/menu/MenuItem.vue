<template>
	<li :class="module + '__item ' + classNames.item">
		<a :class="module + '__link ' + classNames.link" :href="theLink">
			<span :class="module + '__text ' + classNames.text">
				<slot></slot>
			</span>
		</a>
	</li>
</template>

<script>
	export default{
	  name: 'menu-item',
		props: ['mod','text', 'link'],
		data() {
			return{
				module: 'nav',
				theLink: '#',
				classNames: {
					item: [],
					link: [],
					text: []
				}
			}
		},
		created(){
			if(this.$parent.$parent.$attrs.module){
				this.module = this.$parent.$parent.$attrs.module;
			}
			if(this.$props.link){
				this.theLink = this.$props.link;
			}
		}
	}
</script>
