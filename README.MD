## Getting Started

1. Create model in `prisma/schema`
2. `pnpm format-prisma`
3. Apply database migrations: `npx prisma migrate dev --name {name}` 
4. Generate zod: `pnpm prisma generate`
5. 引用generated zod, 创建form zod(文件夹`shared/zod`)

如仅本地开发，数据库不同步到supabase；则第3条变更为：
- 1. 运行`dotenv -e .env -- npx prisma migrate dev --create-only`
- 2. `grant.sql`里的内容追加到`migration.sql`
- 3. 运行`prisma migrate dev`
[参考链接](https://supabase.com/partners/integrations/prisma#troubleshooting)

### FAQ
1. 如遇到接口返回
```
{
    "code": "42501",
    "details": null,
    "hint": null,
    "message": "permission denied for schema public"
}
```
则在http://localhost:54323/project/default/sql/1 sql编辑器里执行 grant.sql里的内容，之后重试接口

2. 如遇updated_at未更新，则
则在http://localhost:54323/project/default/sql/1 sql编辑器里执行 grant.sql里的`create trigger handle_updated_at `这一行，之后重试接口

To learn more about **Refine**, please check out the [Documentation](https://refine.dev/docs)

- **REST Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)


<!-- 终端输入的名字为schema的文件名，并且文件名需要和里面的model的名字一致 -->
