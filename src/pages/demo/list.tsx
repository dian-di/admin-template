import { List, useTable } from '@refinedev/antd'
import type { FieldConfig } from '@/@types/global'
import TableSimple from '@/components/TableSimple'
import { CompletedMap, StatusMap, TypeMap } from '@/shared/const'

const enumMap = {
  status: StatusMap,
  completed: CompletedMap,
  type: TypeMap,
}

export const DemoList: React.FC<{ fields: FieldConfig[] }> = ({ fields }) => {
  const { tableProps } = useTable()

  return (
    <List>
      <TableSimple {...tableProps} fields={fields} enumMap={enumMap} />
    </List>
  )
}
