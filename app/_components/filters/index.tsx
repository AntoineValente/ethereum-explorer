import { FC, PropsWithChildren } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import { TextInput, TextInputProps } from '../input';

const Root: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-row space-x-4">{children}</div>;
};

const Text: FC<TextInputProps> = (props) => {
  return <TextInput rightIcon={MagnifyingGlassIcon} {...props} />;
};

export const Filters = {
  Root,
  Text,
};
