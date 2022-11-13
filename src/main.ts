import './global.scss'
import Home from './modules/Home/Home.svelte'

const app = new Home({
  target: document.getElementById('app')
})

export default app
