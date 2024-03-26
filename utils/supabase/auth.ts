import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { createClient } from "./server"

export async function checkAuth(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  return { props: {} }
}
