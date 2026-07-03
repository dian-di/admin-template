
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Demo
 * 
 */
export type Demo = $Result.DefaultSelection<Prisma.$DemoPayload>
/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Uninitialized: 'Uninitialized',
  InProgress: 'InProgress',
  Completed: 'Completed'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Demos
 * const demos = await prisma.demo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Demos
   * const demos = await prisma.demo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.demo`: Exposes CRUD operations for the **Demo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demos
    * const demos = await prisma.demo.findMany()
    * ```
    */
  get demo(): Prisma.DemoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Demo: 'Demo',
    Entry: 'Entry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "demo" | "entry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Demo: {
        payload: Prisma.$DemoPayload<ExtArgs>
        fields: Prisma.DemoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          findFirst: {
            args: Prisma.DemoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          findMany: {
            args: Prisma.DemoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>[]
          }
          create: {
            args: Prisma.DemoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          createMany: {
            args: Prisma.DemoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>[]
          }
          delete: {
            args: Prisma.DemoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          update: {
            args: Prisma.DemoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          deleteMany: {
            args: Prisma.DemoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>[]
          }
          upsert: {
            args: Prisma.DemoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoPayload>
          }
          aggregate: {
            args: Prisma.DemoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemo>
          }
          groupBy: {
            args: Prisma.DemoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoCountArgs<ExtArgs>
            result: $Utils.Optional<DemoCountAggregateOutputType> | number
          }
        }
      }
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    demo?: DemoOmit
    entry?: EntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Demo
   */

  export type AggregateDemo = {
    _count: DemoCountAggregateOutputType | null
    _avg: DemoAvgAggregateOutputType | null
    _sum: DemoSumAggregateOutputType | null
    _min: DemoMinAggregateOutputType | null
    _max: DemoMaxAggregateOutputType | null
  }

  export type DemoAvgAggregateOutputType = {
    id: number | null
  }

  export type DemoSumAggregateOutputType = {
    id: number | null
  }

  export type DemoMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoCountAggregateOutputType = {
    id: number
    url: number
    title: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DemoAvgAggregateInputType = {
    id?: true
  }

  export type DemoSumAggregateInputType = {
    id?: true
  }

  export type DemoMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DemoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demo to aggregate.
     */
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     */
    orderBy?: DemoOrderByWithRelationInput | DemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demos
    **/
    _count?: true | DemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoMaxAggregateInputType
  }

  export type GetDemoAggregateType<T extends DemoAggregateArgs> = {
        [P in keyof T & keyof AggregateDemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemo[P]>
      : GetScalarType<T[P], AggregateDemo[P]>
  }




  export type DemoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoWhereInput
    orderBy?: DemoOrderByWithAggregationInput | DemoOrderByWithAggregationInput[]
    by: DemoScalarFieldEnum[] | DemoScalarFieldEnum
    having?: DemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoCountAggregateInputType | true
    _avg?: DemoAvgAggregateInputType
    _sum?: DemoSumAggregateInputType
    _min?: DemoMinAggregateInputType
    _max?: DemoMaxAggregateInputType
  }

  export type DemoGroupByOutputType = {
    id: number
    url: string
    title: string
    description: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: DemoCountAggregateOutputType | null
    _avg: DemoAvgAggregateOutputType | null
    _sum: DemoSumAggregateOutputType | null
    _min: DemoMinAggregateOutputType | null
    _max: DemoMaxAggregateOutputType | null
  }

  type GetDemoGroupByPayload<T extends DemoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoGroupByOutputType[P]>
            : GetScalarType<T[P], DemoGroupByOutputType[P]>
        }
      >
    >


  export type DemoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["demo"]>

  export type DemoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["demo"]>

  export type DemoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["demo"]>

  export type DemoSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DemoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["demo"]>

  export type $DemoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string
      description: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["demo"]>
    composites: {}
  }

  type DemoGetPayload<S extends boolean | null | undefined | DemoDefaultArgs> = $Result.GetResult<Prisma.$DemoPayload, S>

  type DemoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemoCountAggregateInputType | true
    }

  export interface DemoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demo'], meta: { name: 'Demo' } }
    /**
     * Find zero or one Demo that matches the filter.
     * @param {DemoFindUniqueArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemoFindUniqueArgs>(args: SelectSubset<T, DemoFindUniqueArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemoFindUniqueOrThrowArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemoFindUniqueOrThrowArgs>(args: SelectSubset<T, DemoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFindFirstArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemoFindFirstArgs>(args?: SelectSubset<T, DemoFindFirstArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFindFirstOrThrowArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemoFindFirstOrThrowArgs>(args?: SelectSubset<T, DemoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demos
     * const demos = await prisma.demo.findMany()
     * 
     * // Get first 10 Demos
     * const demos = await prisma.demo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoWithIdOnly = await prisma.demo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemoFindManyArgs>(args?: SelectSubset<T, DemoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demo.
     * @param {DemoCreateArgs} args - Arguments to create a Demo.
     * @example
     * // Create one Demo
     * const Demo = await prisma.demo.create({
     *   data: {
     *     // ... data to create a Demo
     *   }
     * })
     * 
     */
    create<T extends DemoCreateArgs>(args: SelectSubset<T, DemoCreateArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demos.
     * @param {DemoCreateManyArgs} args - Arguments to create many Demos.
     * @example
     * // Create many Demos
     * const demo = await prisma.demo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemoCreateManyArgs>(args?: SelectSubset<T, DemoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demos and returns the data saved in the database.
     * @param {DemoCreateManyAndReturnArgs} args - Arguments to create many Demos.
     * @example
     * // Create many Demos
     * const demo = await prisma.demo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demos and only return the `id`
     * const demoWithIdOnly = await prisma.demo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemoCreateManyAndReturnArgs>(args?: SelectSubset<T, DemoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demo.
     * @param {DemoDeleteArgs} args - Arguments to delete one Demo.
     * @example
     * // Delete one Demo
     * const Demo = await prisma.demo.delete({
     *   where: {
     *     // ... filter to delete one Demo
     *   }
     * })
     * 
     */
    delete<T extends DemoDeleteArgs>(args: SelectSubset<T, DemoDeleteArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demo.
     * @param {DemoUpdateArgs} args - Arguments to update one Demo.
     * @example
     * // Update one Demo
     * const demo = await prisma.demo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemoUpdateArgs>(args: SelectSubset<T, DemoUpdateArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demos.
     * @param {DemoDeleteManyArgs} args - Arguments to filter Demos to delete.
     * @example
     * // Delete a few Demos
     * const { count } = await prisma.demo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemoDeleteManyArgs>(args?: SelectSubset<T, DemoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demos
     * const demo = await prisma.demo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemoUpdateManyArgs>(args: SelectSubset<T, DemoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demos and returns the data updated in the database.
     * @param {DemoUpdateManyAndReturnArgs} args - Arguments to update many Demos.
     * @example
     * // Update many Demos
     * const demo = await prisma.demo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demos and only return the `id`
     * const demoWithIdOnly = await prisma.demo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DemoUpdateManyAndReturnArgs>(args: SelectSubset<T, DemoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demo.
     * @param {DemoUpsertArgs} args - Arguments to update or create a Demo.
     * @example
     * // Update or create a Demo
     * const demo = await prisma.demo.upsert({
     *   create: {
     *     // ... data to create a Demo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demo we want to update
     *   }
     * })
     */
    upsert<T extends DemoUpsertArgs>(args: SelectSubset<T, DemoUpsertArgs<ExtArgs>>): Prisma__DemoClient<$Result.GetResult<Prisma.$DemoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCountArgs} args - Arguments to filter Demos to count.
     * @example
     * // Count the number of Demos
     * const count = await prisma.demo.count({
     *   where: {
     *     // ... the filter for the Demos we want to count
     *   }
     * })
    **/
    count<T extends DemoCountArgs>(
      args?: Subset<T, DemoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoAggregateArgs>(args: Subset<T, DemoAggregateArgs>): Prisma.PrismaPromise<GetDemoAggregateType<T>>

    /**
     * Group by Demo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoGroupByArgs['orderBy'] }
        : { orderBy?: DemoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demo model
   */
  readonly fields: DemoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Demo model
   */
  interface DemoFieldRefs {
    readonly id: FieldRef<"Demo", 'Int'>
    readonly url: FieldRef<"Demo", 'String'>
    readonly title: FieldRef<"Demo", 'String'>
    readonly description: FieldRef<"Demo", 'String'>
    readonly status: FieldRef<"Demo", 'Status'>
    readonly createdAt: FieldRef<"Demo", 'DateTime'>
    readonly updatedAt: FieldRef<"Demo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Demo findUnique
   */
  export type DemoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter, which Demo to fetch.
     */
    where: DemoWhereUniqueInput
  }

  /**
   * Demo findUniqueOrThrow
   */
  export type DemoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter, which Demo to fetch.
     */
    where: DemoWhereUniqueInput
  }

  /**
   * Demo findFirst
   */
  export type DemoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter, which Demo to fetch.
     */
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     */
    orderBy?: DemoOrderByWithRelationInput | DemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demos.
     */
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demos.
     */
    distinct?: DemoScalarFieldEnum | DemoScalarFieldEnum[]
  }

  /**
   * Demo findFirstOrThrow
   */
  export type DemoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter, which Demo to fetch.
     */
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     */
    orderBy?: DemoOrderByWithRelationInput | DemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demos.
     */
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demos.
     */
    distinct?: DemoScalarFieldEnum | DemoScalarFieldEnum[]
  }

  /**
   * Demo findMany
   */
  export type DemoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter, which Demos to fetch.
     */
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     */
    orderBy?: DemoOrderByWithRelationInput | DemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demos.
     */
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demos.
     */
    distinct?: DemoScalarFieldEnum | DemoScalarFieldEnum[]
  }

  /**
   * Demo create
   */
  export type DemoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * The data needed to create a Demo.
     */
    data: XOR<DemoCreateInput, DemoUncheckedCreateInput>
  }

  /**
   * Demo createMany
   */
  export type DemoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demos.
     */
    data: DemoCreateManyInput | DemoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demo createManyAndReturn
   */
  export type DemoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * The data used to create many Demos.
     */
    data: DemoCreateManyInput | DemoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demo update
   */
  export type DemoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * The data needed to update a Demo.
     */
    data: XOR<DemoUpdateInput, DemoUncheckedUpdateInput>
    /**
     * Choose, which Demo to update.
     */
    where: DemoWhereUniqueInput
  }

  /**
   * Demo updateMany
   */
  export type DemoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demos.
     */
    data: XOR<DemoUpdateManyMutationInput, DemoUncheckedUpdateManyInput>
    /**
     * Filter which Demos to update
     */
    where?: DemoWhereInput
    /**
     * Limit how many Demos to update.
     */
    limit?: number
  }

  /**
   * Demo updateManyAndReturn
   */
  export type DemoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * The data used to update Demos.
     */
    data: XOR<DemoUpdateManyMutationInput, DemoUncheckedUpdateManyInput>
    /**
     * Filter which Demos to update
     */
    where?: DemoWhereInput
    /**
     * Limit how many Demos to update.
     */
    limit?: number
  }

  /**
   * Demo upsert
   */
  export type DemoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * The filter to search for the Demo to update in case it exists.
     */
    where: DemoWhereUniqueInput
    /**
     * In case the Demo found by the `where` argument doesn't exist, create a new Demo with this data.
     */
    create: XOR<DemoCreateInput, DemoUncheckedCreateInput>
    /**
     * In case the Demo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoUpdateInput, DemoUncheckedUpdateInput>
  }

  /**
   * Demo delete
   */
  export type DemoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
    /**
     * Filter which Demo to delete.
     */
    where: DemoWhereUniqueInput
  }

  /**
   * Demo deleteMany
   */
  export type DemoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demos to delete
     */
    where?: DemoWhereInput
    /**
     * Limit how many Demos to delete.
     */
    limit?: number
  }

  /**
   * Demo without action
   */
  export type DemoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demo
     */
    select?: DemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demo
     */
    omit?: DemoOmit<ExtArgs> | null
  }


  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryAvgAggregateOutputType = {
    id: number | null
  }

  export type EntrySumAggregateOutputType = {
    id: number | null
  }

  export type EntryMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntryMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    url: number
    title: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntryAvgAggregateInputType = {
    id?: true
  }

  export type EntrySumAggregateInputType = {
    id?: true
  }

  export type EntryMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _avg?: EntryAvgAggregateInputType
    _sum?: EntrySumAggregateInputType
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: number
    url: string
    title: string
    description: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["entry"]>

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string
      description: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entry model
   */
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'Int'>
    readonly url: FieldRef<"Entry", 'String'>
    readonly title: FieldRef<"Entry", 'String'>
    readonly description: FieldRef<"Entry", 'String'>
    readonly status: FieldRef<"Entry", 'Status'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
    readonly updatedAt: FieldRef<"Entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DemoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DemoScalarFieldEnum = (typeof DemoScalarFieldEnum)[keyof typeof DemoScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DemoWhereInput = {
    AND?: DemoWhereInput | DemoWhereInput[]
    OR?: DemoWhereInput[]
    NOT?: DemoWhereInput | DemoWhereInput[]
    id?: IntFilter<"Demo"> | number
    url?: StringFilter<"Demo"> | string
    title?: StringFilter<"Demo"> | string
    description?: StringNullableFilter<"Demo"> | string | null
    status?: EnumStatusFilter<"Demo"> | $Enums.Status
    createdAt?: DateTimeFilter<"Demo"> | Date | string
    updatedAt?: DateTimeFilter<"Demo"> | Date | string
  }

  export type DemoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: DemoWhereInput | DemoWhereInput[]
    OR?: DemoWhereInput[]
    NOT?: DemoWhereInput | DemoWhereInput[]
    title?: StringFilter<"Demo"> | string
    description?: StringNullableFilter<"Demo"> | string | null
    status?: EnumStatusFilter<"Demo"> | $Enums.Status
    createdAt?: DateTimeFilter<"Demo"> | Date | string
    updatedAt?: DateTimeFilter<"Demo"> | Date | string
  }, "id" | "url">

  export type DemoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DemoCountOrderByAggregateInput
    _avg?: DemoAvgOrderByAggregateInput
    _max?: DemoMaxOrderByAggregateInput
    _min?: DemoMinOrderByAggregateInput
    _sum?: DemoSumOrderByAggregateInput
  }

  export type DemoScalarWhereWithAggregatesInput = {
    AND?: DemoScalarWhereWithAggregatesInput | DemoScalarWhereWithAggregatesInput[]
    OR?: DemoScalarWhereWithAggregatesInput[]
    NOT?: DemoScalarWhereWithAggregatesInput | DemoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Demo"> | number
    url?: StringWithAggregatesFilter<"Demo"> | string
    title?: StringWithAggregatesFilter<"Demo"> | string
    description?: StringNullableWithAggregatesFilter<"Demo"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Demo"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Demo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Demo"> | Date | string
  }

  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: IntFilter<"Entry"> | number
    url?: StringFilter<"Entry"> | string
    title?: StringFilter<"Entry"> | string
    description?: StringNullableFilter<"Entry"> | string | null
    status?: EnumStatusFilter<"Entry"> | $Enums.Status
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    title?: StringFilter<"Entry"> | string
    description?: StringNullableFilter<"Entry"> | string | null
    status?: EnumStatusFilter<"Entry"> | $Enums.Status
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
  }, "id" | "url">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _avg?: EntryAvgOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
    _sum?: EntrySumOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entry"> | number
    url?: StringWithAggregatesFilter<"Entry"> | string
    title?: StringWithAggregatesFilter<"Entry"> | string
    description?: StringNullableWithAggregatesFilter<"Entry"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Entry"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
  }

  export type DemoCreateInput = {
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUncheckedCreateInput = {
    id?: number
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoCreateManyInput = {
    id?: number
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateInput = {
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryUncheckedCreateInput = {
    id?: number
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateManyInput = {
    id?: number
    url: string
    title: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DemoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}