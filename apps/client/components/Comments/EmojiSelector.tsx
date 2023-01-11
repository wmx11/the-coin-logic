import { ActionIcon, Popover, UnstyledButton } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { MutableRefObject, useState } from 'react';
import useThemeStore from 'store/useThemeStore';
import { Icons } from 'utils/icons';

type EmojiSelectorProps<T> = {
  inputRef: MutableRefObject<HTMLTextAreaElement | null>;
  form: UseFormReturnType<T>;
  inputName: string;
};

const EmojiSelector = <T,>({ inputRef, form, inputName }: EmojiSelectorProps<T>) => {
  const theme = useThemeStore((state) => state.theme);
  const [opened, setOpened] = useState(false);

  const handleEmojiClick = ({ emoji, ...rest }: EmojiClickData) => {
    const cursorPosition = inputRef.current?.selectionStart;
    const textBeforePosition = inputRef.current?.value.substring(0, cursorPosition);
    const textAfterPosition = inputRef.current?.value.substring(
      cursorPosition as number,
      inputRef.current.value.length,
    );

    form.setFieldValue(
      inputName,
      `${textBeforePosition} ${emoji} ${textAfterPosition}` as string extends keyof T ? T[keyof T & string] : unknown,
    );
  };

  return (
    <Popover opened={opened} onChange={setOpened} position="bottom" withArrow shadow="md" trapFocus>
      <Popover.Target>
        <ActionIcon variant="filled" color="violet">
          <Icons.Emoji onClick={() => setOpened((o) => !o)} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <EmojiPicker
          emojiStyle={'native' as EmojiStyle}
          emojiVersion="4.0"
          lazyLoadEmojis={true}
          onEmojiClick={handleEmojiClick}
          theme={theme as Theme}
        />
      </Popover.Dropdown>
    </Popover>
  );
};

export default EmojiSelector;
