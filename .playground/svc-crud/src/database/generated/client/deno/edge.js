const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  uuid: 'uuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  name: 'name',
  phone: 'phone'
});


exports.Prisma.ModelName = makeEnum({
  users: 'users'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/franciscoramos/Documents/clau/code/mod-core/.playground/svc-crud/database/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.12.0",
  "engineVersion": "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.dirname = dirname
config.document = dmmf

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQpnZW5lcmF0b3IgY2xpZW50IHsKICAgIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICAgIG91dHB1dCAgICAgICAgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogICAgcHJvdmlkZXIgID0gIm1vbmdvZGIiCiAgICB1cmwgICAgICAgPSBlbnYoIkRCX1BST1hZX1VSTCIpCiAgICBkaXJlY3RVcmwgPSBlbnYoIkRCX1VSTCIpCn0KCm1vZGVsIHVzZXJzIHsKICAgIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgICB1dWlkICAgICAgU3RyaW5nICAgIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogICAgY3JlYXRlZEF0IERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZWRBdCBEYXRlVGltZT8gQHVwZGF0ZWRBdCgpCgogICAgZW1haWwgU3RyaW5nCiAgICBuYW1lICBTdHJpbmc/CiAgICBwaG9uZSBTdHJpbmc/Cn0K'
config.inlineSchemaHash = 'c17cdfda2c0767b4f22c41eb199d467c007b05f1a42220bba265f731834fd984'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DB_PROXY_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DB_PROXY_URL: typeof globalThis !== 'undefined' && globalThis['DB_PROXY_URL'] || typeof process !== 'undefined' && process.env && process.env.DB_PROXY_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

