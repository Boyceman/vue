/**
 * 'this' have to be Vue component
 * otherwise report error with 'this'
 */
export function loadMore () {
  const wrap = this.$refs.wrap
  const wrapPaddingTop = Math.ceil(parseFloat(window.getComputedStyle(wrap).paddingTop))
  const wrapHeight = parseInt(window.getComputedStyle(wrap).height) + wrapPaddingTop * 2
  const view = this.$parent.$el
  const viewHeight = parseInt(window.getComputedStyle(view).height)
  const viewScrollTop = view.scrollTop
  const diff = wrapHeight - viewHeight - viewScrollTop
  if (diff <= 0 && !this.$props.loading) {
    this.$utils.logs.group('load more  --UI', viewScrollTop, 'red')
    this.$props.fetchCells()
  }
}

export function hiddenOutViewport () {
  const cells = this.$refs.cell
  if (!cells || cells.length <= 50) return false

  const buffer = 1000
  cells.forEach(item => {
    const { top, bottom } = item.$el.getBoundingClientRect()
    if (top > -buffer && bottom < window.innerHeight + buffer) {
      item.$el.className = 'LatestMeetingCell'
    } else {
      item.$el.className = 'LatestMeetingCell vh'
    }
  })
}
