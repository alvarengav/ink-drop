import { GetServerSidePropsResult } from 'next'

import { createClient } from './server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function checkAuth(): Promise<GetServerSidePropsResult<any>> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return { props: {} }
}
