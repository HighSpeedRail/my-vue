<template>
    <div class="content_body">
      <router-view class="content_view"></router-view>
      <p class="navBar">
        <span><router-link to="/content/">Home</router-link></span>
        <span><router-link to="/content/list">List</router-link></span>
        <span><router-link to="/content/info">Info</router-link></span>
        <span><router-link to="/content/user">User</router-link></span>
      </p>
    </div>
</template>

<script>
	export default {
		name: '',
		props: [],
		data () {
			return {}
		},
		methods: {},
		components: {}
	}
</script>
