export const todoNoCheckCount = (ts) => {
  let cnt = 0
  for (let t of ts) {
    if (!t.check) {
      cnt++
    }
  }
  return cnt
}
