"use server";
/* eslint-disable react-hooks/rules-of-hooks */
// this page doubles as a sign up page and a sign in page
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { mongoUserModel } from "../../../../../lib/types/User";

const signin = async () => {
  async function discoverUser(formData: FormData) {
    "use server";
    const user = await mongoUserModel.findOne({
      studentId: formData.get("identifier"),
    });
    console.log(user);
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <h1>Sign In</h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-2">
          <form action={discoverUser} method="post">
            <Input placeholder="Email or Student ID" isRequired={true} />
            <Input placeholder="Password" isRequired={true} type="password" />
            <Button variant="solid" disableRipple={true} type="submit">
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default signin;
