import Login from "./auth/login";

export const metadata = {
  title: "App Router",
}; 

export default async function Page() {
  return <div> 
    <Login></Login>
  </div>;
}
 