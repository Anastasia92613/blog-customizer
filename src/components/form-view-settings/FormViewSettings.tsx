import { OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

import styles from './FormViewSettings.module.scss'

type FormViewSettingsProps = {
    selectedBackground: OptionType | null;
    setBackground: (selected: OptionType) => void;
    backgroundColors: OptionType[];
    selectedContentWidth: OptionType | null;
    setContentWidth: (selected: OptionType) => void;
    contentWidthArr: OptionType[];
}

export const FormViewSettings = ({
    selectedBackground,
    setBackground,
    backgroundColors,
    selectedContentWidth,
    setContentWidth,
    contentWidthArr
}: FormViewSettingsProps) => {
    return (
        <div className={styles.container}>
            <Select 
                selected={selectedBackground}
                onChange={setBackground}
                options={backgroundColors}
                title='Цвет фона'
            />

            <Select
                selected={selectedContentWidth}
                onChange={setContentWidth}
                options={contentWidthArr}
                title='Ширина контента'
            />
        </div>
    )
}