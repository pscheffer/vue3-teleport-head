<template>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p> 
  <router-link to="/contact">Go to Contact Page</router-link>
</template>

<script>
import metaService from '../../services/meta'

export default {
  setup() {
    const title = 'Home'
    const description = 'This is a description of the homepage.'

    metaService.update('title', title)
    metaService.update('description', description)

    return {
      title,
      description
    }
  }
}
</script>

