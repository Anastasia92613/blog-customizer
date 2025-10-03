import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { OptionType } from 'src/constants/articleProps';

import styles from './FormSettingsFont.module.scss'

type FormSettingsFontProps = {
  selectedFont: OptionType | null;
  setSelectedFont: (selected: OptionType) => void;
  fontFamilyOptions: OptionType[];
  selectedSize: OptionType;
  setSelectedSize: (value: OptionType) => void;
  fontSizeOptions: OptionType[];
  selectedColor: OptionType | null;
  setColor: (selected: OptionType) => void;
  fontColors: OptionType[];
}

export const FormSettingsFont = ({
    selectedFont,
    setSelectedFont, 
    fontFamilyOptions, 
    selectedSize, 
    setSelectedSize, 
    fontSizeOptions, 
    selectedColor, 
    setColor, 
    fontColors
}: FormSettingsFontProps) => {

    return (
        <div className={styles.container}>
            <Select
            selected={selectedFont}
            onChange={setSelectedFont}
            options={fontFamilyOptions}
            title='шрифт'
            />
            <RadioGroup
                selected={selectedSize}
                name='radio'
                onChange={setSelectedSize}
                options={fontSizeOptions}
                title='размер шрифта'
            />
            <Select
                selected={selectedColor}
                onChange={setColor}
                options={fontColors}
                title='Цвет шрифта'
            />
        </div>
    )
}

