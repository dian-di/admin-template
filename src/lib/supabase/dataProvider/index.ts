import type { DataProvider } from '@refinedev/core'
import type { SupabaseClient } from '@supabase/supabase-js'
import { generateFilter, handleError } from '../utils'

import camelcaseKeys from 'camelcase-keys'

const mapKeys = <T>(object: Record<string, T>, cb: (value: T, key: string, obj: any) => any) =>
  Object.entries(object).reduce(
    (acc, current) => {
      const newKey = cb(current[1], current[0], object)
      acc[newKey] = current[1]
      return acc
    },
    {} as Record<string, T>,
  )

const toSnakeCase = (obj: any) =>
  mapKeys(obj, (_, key) => key.replace(/([A-Z])/g, '_$1').toLowerCase())

// 将 snake_case 转换为 camelCase
const toCamelCase = (obj: any) => camelcaseKeys(obj)

export const dataProvider = (
  supabaseClient: SupabaseClient<any, any, any>,
): Required<DataProvider> => {
  return {
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
      const { current = 1, pageSize = 10, mode = 'server' } = pagination ?? {}

      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).select(meta?.select ?? '*', {
        count: meta?.count ?? 'exact',
      })

      if (mode === 'server') {
        query.range((current - 1) * pageSize, current * pageSize - 1)
      }

      sorters?.map((item) => {
        const [foreignTable, field] = item.field.split(/\.(?=[^.]+$)/)

        if (foreignTable && field) {
          query.select(meta?.select ?? `*, ${foreignTable}(${field})`).order(field, {
            ascending: item.order === 'asc',
            foreignTable: foreignTable,
          })
        } else {
          query.order(item.field, {
            ascending: item.order === 'asc',
          })
        }
      })

      filters?.map((item) => {
        generateFilter(item, query)
      })

      const { data, count, error } = await query

      if (error) {
        return handleError(error)
      }

      return {
        data: data.length ? toCamelCase(data) : [],
        total: count || 0,
      } as any
    },

    getMany: async ({ resource, ids, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).select(meta?.select ?? '*')

      if (meta?.idColumnName) {
        query.in(meta.idColumnName, ids)
      } else {
        query.in('id', ids)
      }

      const { data, error } = await query

      if (error) {
        return handleError(error)
      }

      return {
        data: data.length ? data.map((item) => toCamelCase(item)) : [],
      } as any
    },

    create: async ({ resource, variables, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).insert(toSnakeCase(variables))

      query.select(meta?.select ?? '*')

      const { data, error } = await query

      if (error) {
        return handleError(error)
      }

      return {
        data: (data || [])[0] as any,
      }
    },

    createMany: async ({ resource, variables, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).insert(variables.map((item) => toSnakeCase(item)))

      query.select(meta?.select ?? '*')

      const { data, error } = await query

      if (error) {
        return handleError(error)
      }

      return {
        data: data as any,
      }
    },

    update: async ({ resource, id, variables, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).update(toSnakeCase(variables))

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id)
      } else {
        query.match({ id })
      }

      query.select(meta?.select ?? '*')

      const { data, error } = await query
      if (error) {
        return handleError(error)
      }

      return {
        data: (data || [])[0] as any,
      }
    },

    updateMany: async ({ resource, ids, variables, meta }) => {
      const response = await Promise.all(
        ids.map(async (id) => {
          const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

          const query = client.from(resource).update(toSnakeCase(variables))

          if (meta?.idColumnName) {
            query.eq(meta.idColumnName, id)
          } else {
            query.match({ id })
          }

          query.select(meta?.select ?? '*')

          const { data, error } = await query
          if (error) {
            return handleError(error)
          }

          return (data || [])[0] as any
        }),
      )

      return {
        data: response,
      }
    },

    getOne: async ({ resource, id, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).select(meta?.select ?? '*')

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id)
      } else {
        query.match({ id })
      }

      const { data, error } = await query
      if (error) {
        return handleError(error)
      }

      return {
        data: toSnakeCase((data || [])[0]) as any,
      }
    },

    deleteOne: async ({ resource, id, meta }) => {
      const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

      const query = client.from(resource).delete()

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id)
      } else {
        query.match({ id })
      }

      const { data, error } = await query
      if (error) {
        return handleError(error)
      }

      return {
        data: (data || [])[0] as any,
      }
    },

    deleteMany: async ({ resource, ids, meta }) => {
      const response = await Promise.all(
        ids.map(async (id) => {
          const client = meta?.schema ? supabaseClient.schema(meta.schema) : supabaseClient

          const query = client.from(resource).delete()

          if (meta?.idColumnName) {
            query.eq(meta.idColumnName, id)
          } else {
            query.match({ id })
          }

          const { data, error } = await query
          if (error) {
            return handleError(error)
          }

          return (data || [])[0] as any
        }),
      )

      return {
        data: response,
      }
    },

    getApiUrl: () => {
      throw Error('Not implemented on refine-supabase data provider.')
    },

    custom: () => {
      throw Error('Not implemented on refine-supabase data provider.')
    },
  }
}
