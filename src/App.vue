<template>
  <router-view></router-view>
  <teleport to="head">
    <title>{{ title }}</title>
    <meta property="og:description" :content="description">
  </teleport>
</template>

<script>
import metaService from './services/meta'
import { computed } from '@vue/runtime-core'

export default {
  name: 'App',
  setup() {
    const title = computed(() => {
      return metaService.state.title
    })

    const description = computed(() => {
      return metaService.state.description
    })

    return {
      description,
      title
    }
  }
}
</script>