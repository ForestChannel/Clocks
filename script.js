function scroller(elem, num, obj) {
  let elems = document.querySelectorAll(elem)
  let posNum
  switch (num) {
    case '9':
      elems.forEach((element) => (element.style.top = 'calc(-46px * 5)'))
      posNum = 9
      break
    case '8':
      elems.forEach((element) => (element.style.top = 'calc(-46.4px * 4)'))
      posNum = 8
      break
    case '7':
      elems.forEach((element) => (element.style.top = 'calc(-47px * 3)'))
      posNum = 7
      break
    case '6':
      elems.forEach((element) => (element.style.top = 'calc(-48px * 2)'))
      posNum = 6
      break
    case '5':
      elems.forEach((element) => (element.style.top = 'calc(-51px * 1)'))
      posNum = 5
      break
    default:
      elems.forEach((element) => (element.style.top = '-6.5px'))
      posNum = 4
      break
    case '3':
      elems.forEach((element) => (element.style.top = 'calc(38px * 1)'))
      posNum = 3
      break
    case '2':
      elems.forEach((element) => (element.style.top = 'calc(41.5px * 2)'))
      posNum = 2
      break
    case '1':
      elems.forEach((element) => (element.style.top = 'calc(43px * 3)'))
      posNum = 1
      break
    case '0':
      elems.forEach((element) => (element.style.top = 'calc(43px * 4)'))
      posNum = 0
      break
  }
  if (posNum == num) {
    elems.forEach((element) => (element.style.color = '#222'))
    document.getElementsByClassName(obj)[posNum].style.color = 'crimson'
  }
}
function getClock() {
  let time = new Date()

  let [sec, min, hr] = [time.getSeconds(), time.getMinutes(), time.getHours()]

  sec < 10 ? sec = ('0' + sec) : sec
  min < 10 ? min = ('0' + min) : min
  hr < 10 ? hr = ('0' + hr) : hr

  document.getElementById('realTime').innerHTML = `${hr} : ${min} : ${sec}`
  
  let secArr = String(sec).split('')
  let minArr = String(min).split('')
  let hrArr = String(hr).split('')

  scroller('.secFirstPos', secArr[0], 'secFirstPos')
  scroller('.secSecondPos', secArr[1], 'secSecondPos')
  scroller('.minFirstPos', minArr[0], 'minFirstPos')
  scroller('.minSecondPos', minArr[1], 'minSecondPos')
  scroller('.hrFirstPos', hrArr[0], 'hrFirstPos')
  scroller('.hrSecondPos', hrArr[1], 'hrSecondPos')
}
setInterval(getClock, 1000)
