// 目的：一個todolist, 按住 shift 可 check 多個 todo
// 行為：在第一個 checked 的 todo，按住 shift 點最後一個 todo 時，兩者之間的 todo 都要 checked.
// 按住 shift 時 looping 整個 todolist，

// step 1
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked

function handleCheck (e) {
  // flag 指示是否在 前一次checked 和 本次checked 之間 
  let isBetween = false
  // 同時按下shift 和 click 進入迴圈
  if (this.checked && e.shiftKey) {
    checkboxes.forEach(checkbox => {
      // (本次 || 第一次) 才更改 flag
      if (checkbox === this || checkbox === lastChecked) {
        isBetween = !isBetween
      }
      if (isBetween) {
        checkbox.checked = true
      }
    })
  }
  // 將 前一次checked closure
  lastChecked = this
}

// step 2 掛事件
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

