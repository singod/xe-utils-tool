import { XEUtilsMethods } from '../xe-utils'

/**
 * 数组迭代器,从最后开始迭代
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function lastArrayEach(obj: any, iteratee: Function, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组迭代器,从最后开始迭代
     * @param obj 对象
     * @param iteratee 回调 
     * @param context 上下文
     */
    lastArrayEach: typeof lastArrayEach;
  }
}

export default lastArrayEach