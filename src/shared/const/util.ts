/**
 * 将 Enum 和 Map 转换为 List
 * @param enumObj - 枚举对象
 * @param mapObj - 映射对象（键与枚举值对应）
 * @returns {Array<{ label: string; value: T }>} 返回 { label, value } 的数组
 */
export function enumMapToList<T extends string | number>(
    enumObj: Record<string, T>,
    mapObj: Record<string, string>,
  ): Array<{ label: string; value: T }> {
    // 获取枚举的所有值（过滤掉反向映射的 number 类型）
    const enumValues = Object.values(enumObj).filter(
      (value) => typeof value === 'string' || typeof value === 'number',
    ) as T[]
  
    return enumValues.reduce(
      (acc, value) => {
        // 检查 Map 中是否有对应的键
        if (mapObj[value as string]) {
          acc.push({
            label: mapObj[value as string],
            value,
          })
        }
        return acc
      },
      [] as Array<{ label: string; value: T }>,
    )
  }