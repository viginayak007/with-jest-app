
export async function getUsers() {
    const res = await fetch('https://66819de704acc3545a072f08.mockapi.io/api/v1/users')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }