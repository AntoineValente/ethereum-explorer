import { ComponentProps, ComponentType, FC, SVGProps } from 'react';

import { XMarkIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

import { IconType } from '../_consts/icons';

export type TextInputProps = ComponentProps<'input'> & {
  rightIcon?: IconType;
  onClear?: () => void;
};

export const TextInput: FC<TextInputProps> = ({
  rightIcon: RightIcon,
  onClear,
  ...rest
}) => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {RightIcon && <RightIcon className="w-5 h-5 fill-typo-subtle" />}
        </div>

        <input
          className={clsx(
            'block bg-transparent w-full pl-10 pr-10 py-2 text-typo-base rounded-md border border-border-base placeholder-typo-muted',
            'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          )}
          {...rest}
        />

        {onClear && (
          <div
            onClick={onClear}
            className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <XMarkIcon className="w-5 h-5 fill-typo-subtle" />
          </div>
        )}
      </div>
    </div>
  );
};
