import { ref } from 'vue'

export function useMenuItems() {
  const menuItems = ref([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
  ])
  return { menuItems }
}
