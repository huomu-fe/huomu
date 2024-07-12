import type { SwitchProps } from 'antd';
import { Switch } from 'antd';

type NumberSwitchProps = Omit<SwitchProps, 'value' | 'onChange'> & {
  value?: number;
  onChange?: (value: number) => void;
};

function NumberSwitch({ value, onChange, ...props }: NumberSwitchProps) {
  return <Switch {...props} value={Boolean(value)} onChange={(v) => onChange?.(Number(v))} />;
}

export { NumberSwitch };
export type { NumberSwitchProps };
