import { XEUtilsMethods } from '../xe-utils'

/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param obj 对象
 * @param iteratee 回调/属性
 * @param context 上下文
 */
export declare function countBy(obj: any, iteratee: Function, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 集合分组统计,返回各组中对象的数量统计
     * @param obj 对象
     * @param iteratee 回调/属性
     * @param context 上下文
     */
    countBy: typeof countBy;
  }
}

export default countBy