import { Center, Container } from '@mantine/core';
import { NotFound } from 'components/NotFound';
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { TextContentProps } from './TextContent';

type TextContentWrapperProps = TextContentProps & PropsWithChildren;

const TextContentWrapper: FC<TextContentWrapperProps> = ({ content, children }) => {
  if (!content) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }
  return <Container className="py-10 min-h-screen">{React.cloneElement(children as ReactElement, { content })}</Container>;
};

export default TextContentWrapper;
