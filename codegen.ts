import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://devnet.evercloud.dev/223ed117967a44f9ad7a5f01f67d04da/graphql',
  documents: ['./Queries.ts', "./Mutations.ts"],
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ["typescript", "typescript-operations"]
    }
  }
}
 
export default config