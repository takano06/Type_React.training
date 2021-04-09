import { Todo } from './types'

export const todoNoCheckCount = (ts: Todo[]) => {
  let cnt = 0
  for (const t of ts) {
    if (!t.check) {
      cnt++
    }
  }
  return cnt
}
