<template>
  <h1>Posts List</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props: ['posts'],
    
}
</script>

<style>

</style>