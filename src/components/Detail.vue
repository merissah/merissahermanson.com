<template>
    <article v-if="post" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>

        <h3 class="post__meta">
          <span class="post__sep"></span>
          <time>{{ published }}</time>
        </h3>

        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>

      <section class="post__body rte" v-html="content"></section>
    </article>
</template>

<script>
export default {
  name: 'blog-post',
  resource: 'BlogPost',
  props: { post: String },

  data() {
    return {
      title: '',
      content: '',
      published: '',
      description: ''
    }
  },

  watch: {
    post(to, from) {
      if (to === from || !this.post) return;
      this.$getResource('post', to)
    }
  },

  beforeMount() {
    if (!this.post) return;
    this.$getResource('post', this.post)
  }
}
</script>
