import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
})

const configProject = configSchema.safeParse({
  // eslint-disable-next-line n/no-process-env
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
})
if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error(`error => ${JSON.stringify(configProject.error)}`)
}

const envConfig = configProject.data
export default envConfig
