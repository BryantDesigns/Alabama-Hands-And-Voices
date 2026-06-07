import { reader } from './reader'

// Typed page content helpers — server-only.
// Import these functions in server components and route files only.

export async function getHomePageContent() {
  return reader.singletons.homePage.read()
}

export async function getSiteSettings() {
  return reader.singletons.siteSettings.read()
}

export async function getNavigation() {
  return reader.singletons.navigation.read()
}

export async function getAboutPageContent() {
  return reader.singletons.aboutPage.read()
}

export async function getContactPageContent() {
  return reader.singletons.contactPage.read()
}

export async function getMembershipPageContent() {
  return reader.singletons.membershipPage.read()
}

export async function getChooseMembershipPageContent() {
  return reader.singletons.chooseMembershipPage.read()
}

export async function getAstraPageContent() {
  return reader.singletons.astraPage.read()
}

export async function getGbysPageContent() {
  return reader.singletons.gbysPage.read()
}

export async function getSafetyPageContent() {
  return reader.singletons.safetyPage.read()
}

export async function getDhhCommitteePageContent() {
  return reader.singletons.dhhCommitteePage.read()
}

export async function getResourcesPageContent() {
  return reader.singletons.resourcesPage.read()
}

export async function getFaqPageContent() {
  return reader.singletons.faqPage.read()
}
