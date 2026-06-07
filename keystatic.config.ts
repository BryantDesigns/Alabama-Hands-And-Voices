import { config } from '@keystatic/core'

// Storage mode: local-file for development.
// Decision for production (GitHub mode, Keystatic Cloud, or local-only) is deferred
// until local schemas and rendering are stable.
export default config({
  storage: {
    kind: 'local',
  },
  singletons: {},
  collections: {},
})
