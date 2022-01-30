<template>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <router-link to="/">Go to Home</router-link>
</template>

<script>
import metaService from '../../services/meta'

export default {
  setup() {
    const title = 'Contact'
    const description = 'This is a description of this contact page.'

    metaService.update('title', title)
    metaService.update('description', description)

    return {
      title,
      description
    }
  }
}
</script>

