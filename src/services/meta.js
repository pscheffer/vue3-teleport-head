import { reactive } from '@vue/reactivity'

const store = {
  state: reactive({
    title: 'Default Title',
    description: 'Default Description'
  }),
  update: (key, newVal) => {
    store.state[key] = newVal
  }
}

export default store