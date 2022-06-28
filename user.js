module.exports = (id) => {
  const epoch = 1420070400000 // Discord's epoch
  let result = new Date((Math.round(id/4194304+1420070400000)/1000).toFixed(0) * 1000)

  return result
}
