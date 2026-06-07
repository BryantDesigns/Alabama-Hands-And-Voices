import { reader } from './reader'

// Typed collection helpers — server-only.
// Import these functions in server components and route files only.

export async function getBoardMembers() {
  return reader.collections.boardMembers.all()
}

export async function getStaffMembers() {
  return reader.collections.staffMembers.all()
}

export async function getVideos() {
  return reader.collections.videos.all()
}
