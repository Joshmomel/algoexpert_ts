export function taskAssignment(k: number, tasks: number[]) {
  let sortedTasks = [...tasks].sort((a, b) => a - b)
  let left = 0
  let right = tasks.length - 1
  let pairList = []

  while(right > left) {
    const t1 = tasks.indexOf(sortedTasks[left])
    tasks[t1] = -1
    const t2 = tasks.indexOf(sortedTasks[right])
    tasks[t2] = -1

    pairList.push([t1, t2])
    left ++
    right --
  }

  return pairList
}


taskAssignment(4, [1, 3, 5, 3, 1, 4])
