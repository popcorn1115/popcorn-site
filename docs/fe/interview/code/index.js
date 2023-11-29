/**
 * 防抖函数
 * @description 将多次执行变为最后一次执行
 * @param func 需要防抖的函数
 * @param wait 等待的时间
 */
const debounce = (func, wait = 50) => {
	// 缓存一个定时器id
	let timer = 0
	// 返回一个函数，每次实际调用的防抖函数
	// 如果已经设定过定时器，就清空上一次的定时器
	// 开始一个新的定时器，延迟执行用户传入的方法
	return function(...args) {
		if(timer) clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, wait)
	}
}
