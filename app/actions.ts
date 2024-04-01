
// https://auth0.com/blog/using-nextjs-server-actions-to-call-external-apis/
// https://nextjs.org/docs/pages/building-your-application/data-fetching

// app/actions.ts
'use server'
 
export default async function myAction() {

  const response = await fetch("https://9cw9le5m82.execute-api.ap-southeast-2.amazonaws.com")
  const result = await response.json()
  return result
  
}