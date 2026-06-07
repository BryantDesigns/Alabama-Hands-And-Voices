import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../keystatic.config'

// Server-only Keystatic reader. Import this file only in server components and route files.
// Never import in 'use client' components.
export const reader = createReader(process.cwd(), keystaticConfig)
