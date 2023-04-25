import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://devnet.evercloud.dev/223ed117967a44f9ad7a5f01f67d04da/graphql',
  documents: './Queries.ts',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
      ],
    },
  },
};

export default config;
