import { XEUtilsMethods } from '../xe-utils'

/**
 * 深度比较两个对象之间的值是否相等，使用自定义比较函数
 * @param obj1 值1
 * @param obj2 值2
 * @param func 自定义函数
 */
export declare function isEqualWith(obj1: any, obj2: any, func?: Function): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 深度比较两个对象之间的值是否相等，使用自定义比较函数
     * @param obj1 值1
     * @param obj2 值2
     * @param func 自定义函数
     */
    isEqualWith: typeof isEqualWith;
  }
}

export default isEqualWith