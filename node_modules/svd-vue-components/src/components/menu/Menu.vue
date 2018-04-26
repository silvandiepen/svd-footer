<template>
	<nav :class="classNames">
		<slot></slot>
	</nav>
</template>

<script>
/// nav--basic__medium-up nav--mobile__small-only
	export default{
	  name: 'menu-container',
		props: ['mod','small-only','medium-only','large-only','xlarge-only','small-up','medium-up','large-up','xlarge-up'],
		data(){
			return{
				module: 'nav' || this.$props.mod,
				breakpoints: ['small','medium','large','xlarge'],
				classNames: [this.module]
			}
		},
		created(){
			let self = this;
			if(this.$props.mod){
				self.classNames.push(this.$props.mod);
			}

			for (let i = 0; i < this.breakpoints.length; ++i) {
				let className = '';
				let bp = self.breakpoints[i];
				let bpOnly = bp + 'Only';
				let bpUp = bp + 'Up';

				if(self.$props[bpOnly]){
					className = 'nav--'+self.$props[bpOnly]+'__'+bp+'-only';
					self.classNames.push(className);
				}
				if(self.$props[bpUp]){
					className = 'nav--'+this.$props[bpUp]+'__'+bp+'-up';
					self.classNames.push(className);
				}
			};
		}
	}
</script>
