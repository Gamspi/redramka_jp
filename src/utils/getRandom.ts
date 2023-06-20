export const getRandom = (range = 10000, prefix = '') => {
  return prefix + (~~(Math.random() * range)).toString()
}
