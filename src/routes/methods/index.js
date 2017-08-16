import apiGenerator from '@/api'
import { setStorage } from '@/utils/storage'

export const fetchCells = (url) => {
  return function () {
    this.listLoading({ loading: true })
    apiGenerator({ url }).then(response => {
      const { list } = response.body
      // TODO timer need to be removed when api was added
      setTimeout(() => {
        this.cells = this.cells.concat(list)
        this.listLoading({ loading: false })
        setStorage(`${this.$route.path}-list`, this.cells)
      }, 800)
    }, filedDate => console.error(filedDate))
  }
}
