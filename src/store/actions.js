/**
 * async mutation
 */
import * as logs from '@/utils/logs'

export default {
  // checkout ({ commit, state }, products) {
  //   // 把当前购物车的物品备份起来
  //   const savedCartItems = [...state.cart.added]
  //   // 发出结账请求，然后乐观地清空购物车
  //   commit(types.CHECKOUT_REQUEST)
  //   // 购物 API 接受一个成功回调和一个失败回调
  //   shop.buyProducts(
  //     products,
  //     // 成功操作
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     // 失败操作
  //     () => commit(types.CHECKOUT_FAILURE, savedCartItems)
  //   )
  //   logs.group('tabBarActive  --Vuex Mutation', payload)
  // }
}
