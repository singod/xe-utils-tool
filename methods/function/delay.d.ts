import { XEUtilsMethods } from '../xe-utils'

/**
 * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
 * @param callback 回调
 * @param wait 延迟毫秒
 * @param params 额外的参数
 */
export declare function delay(callback: Function, wait: number, ...params: any[]): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
     * @param callback 回调
     * @param wait 延迟毫秒
     * @param params 额外的参数
     */
    delay: typeof delay;
  }
}

export default delay