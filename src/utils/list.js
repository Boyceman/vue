/**
 * 'this' have to be Vue component
 * otherwise report error with 'this'
 */
export function loadMore (view = this.$el.parentNode) {
  const wrap = this.$refs.wrap
  if (!wrap) return 0
  const wrapPaddingTop = Math.ceil(parseFloat(window.getComputedStyle(wrap).paddingTop))
  const wrapHeight = parseInt(window.getComputedStyle(wrap).height) + wrapPaddingTop * 2
  const viewHeight = parseInt(window.getComputedStyle(view).height)
  const viewScrollTop = view.scrollTop
  const diff = wrapHeight - viewHeight - viewScrollTop
  if (diff <= 0 && !this.loading) {
    this.$utils.logs.group('load more  --UI', diff, 'red')
    this.$props.fetchCells()
  }
  return viewScrollTop
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
