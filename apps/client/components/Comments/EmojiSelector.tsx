import { Popover, UnstyledButton } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import { MutableRefObject, useState } from 'react';
import { Icons } from 'utils/icons';

type EmojiSelectorProps<T> = {
  inputRef: MutableRefObject<HTMLTextAreaElement | null>;
  form: UseFormReturnType<T>;
  inputName: string;
};

const EmojiSelector = <T,>({ inputRef, form, inputName }: EmojiSelectorProps<T>) => {
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
        <UnstyledButton>
          <Icons.Emoji onClick={() => setOpened((o) => !o)} />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <EmojiPicker emojiStyle={'native' as EmojiStyle} emojiVersion="4.0" lazyLoadEmojis={true} onEmojiClick={handleEmojiClick} />
      </Popover.Dropdown>
    </Popover>
  );
};

export default EmojiSelector;
