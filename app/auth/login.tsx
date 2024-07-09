import { Button, Input } from 'gds-lib';
export const metadata = {
  title: "App Router",
}; 

export default async function Login() {
  return <div> 
    <Input label ="UserName"></Input>
    <Input label ="Token"></Input>
    <Button></Button>
  </div>;
}
 