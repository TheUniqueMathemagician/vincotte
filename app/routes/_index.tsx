import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import { Stack } from "styled-system/jsx";
import { Button } from "../components/interface/button";
import * as Card from '../components/interface/card';
import { FormLabel } from "../components/interface/form-label";
import { Input } from "../components/interface/input";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  return { message: "Hello, world!" };
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={css({ background: "red" })}>THIS SHOULD BE RED</h1>
      <Card.Root width="sm">
        <Card.Header>
          <Card.Title>{message}</Card.Title>
          <Card.Description>Add new members to your organisation.</Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <Stack gap="1.5">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Name" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="Email" />
            </Stack>
          </Stack>
        </Card.Body>
        <Card.Footer gap="3">
          <Button variant="outline">Cancel</Button>
          <Button>Invite</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
