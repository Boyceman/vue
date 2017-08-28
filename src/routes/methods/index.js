import apiGenerator from '@/api'
import { setStorage } from '@/utils/storage'

export const fetchCells = (url) => {
  return function () {
    this.listLoading({ loading: true })
    apiGenerator({ url }).then(response => {
      const { data: { list, count } } = response
      // TODO timer need to be removed when api was added
      setTimeout(() => {
        this.cells = this.cells.concat(list)
        this.listCount = count
        this.listLoading({ loading: false })
        setStorage(`${this.$route.path}-list`, this.cells)
        setStorage(`${this.$route.path}-count`, this.listCount)
      }, 800)
    }, filedDate => console.error(filedDate))
  }
}

export const refreshCells = (url) => {
  return function () {
    this.listLoading({ loading: true })
    apiGenerator({ url }).then(response => {
      const { list } = response.body
      // TODO timer need to be removed when api was added
      setTimeout(() => {
        this.cells = list
        setStorage(`${this.$route.path}-list`, this.cells)
        this.listLoading({ loading: false })
        this.$refs.infiniteList.$refs.loadmore.onTopLoaded()
      }, 800)
    }, filedDate => console.error(filedDate))
  }
}

export function fetchDetail (url, options) {
  this.detailLoading({ loading: true })
  apiGenerator({ url, options }).then(response => {
    const { data } = response
// TODO timer need to be removed when api was added
    setTimeout(() => {
      this.detail = data
      this.detailLoading({ loading: false })
    }, 800)
  }, filedDate => console.error(filedDate))
}

export const fetchComments = (url, params) => {
  return function () {
    this.detailCommentLoading({ loading: true })
    apiGenerator({ url, params }).then(response => {
      const { data } = response
// TODO timer need to be removed when api was added
      setTimeout(() => {
        this.comments = this.comments.concat(data.list)
        this.commentCount = data.count
        setStorage(`${this.$route.path}-list`, this.comments)
        setStorage(`${this.$route.path}-count`, this.commentCount)
        this.detailCommentLoading({ loading: false })
      }, 800)
    }, filedDate => console.error(filedDate))
  }
}
