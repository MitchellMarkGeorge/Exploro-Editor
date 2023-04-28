import React from "react";
import styled from "styled-components";
import { Center } from "../ui/Center";
import logoSvg from "@/assets/logo.svg";
import { Heading } from "../ui/Heading";

const Logo = styled.img`
  display: block;
  height: 6.25rem;
  width: 6.25rem;
  max-width: 100%;
`;

const NoBackgroundHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.secondaryText};
`;

export default function NoPlayground() {
  return (
    <Center spacing="1.5rem">
      <Logo src={logoSvg} />
      <NoBackgroundHeading>No Playgrounds</NoBackgroundHeading>
    </Center>
  );
}
