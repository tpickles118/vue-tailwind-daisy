import { ref } from 'vue'

export function useMenuItems() {
  const menuItems = ref([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/views/portfolio' },
    { name: 'About', path: '/views/about' },
    { name: 'Resume', path: '/views/resume' },
  ])
  return { menuItems }
}
