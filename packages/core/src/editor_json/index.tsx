import { useEffect, useRef } from 'react';
import { JSONEditor as OriginJSONEditor, Mode } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}

function EditorJSON({ value, onChange, readonly }: EditorJSONProps) {
  const ref = useRef<HTMLDivElement>(null);
  const refEditor = useRef<OriginJSONEditor | null>(null);

  const refOnChange = useRef(onChange);

  useEffect(() => {
    refEditor.current?.update({
      text: value || '',
    });
  }, [value]);

  useEffect(() => {
    refEditor.current = new OriginJSONEditor({
      target: ref.current!,
      props: {
        mode: Mode.text,
        readOnly: readonly,
        content: {
          text: value || '',
        },
        onChange: (newContent) => {
          // @ts-ignore
          refOnChange.current(newContent.text);
        },
      },
    });
  }, []);

  return <div ref={ref} className="h-full w-full" />;
}

export { EditorJSON };
