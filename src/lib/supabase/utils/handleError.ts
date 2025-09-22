import type { HttpError } from '@refinedev/core'
import type { PostgrestError } from '@supabase/supabase-js'

export const handleError = (error: PostgrestError) => {
  const customError: HttpError = {
    ...error,
    message: error.message,
    statusCode: parseInt(error.code, 10),
  }
  return Promise.reject(customError)
}
