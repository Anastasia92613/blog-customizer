import { useState } from 'react';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Separator } from 'src/ui/separator';
import { FormSettingsFont } from '../form-settings-font';
import { FormViewSettings } from '../form-view-settings';

import { OptionType } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	selectedBackground: OptionType | null;
	setBackground: (selected: OptionType) => void;
	backgroundColors: OptionType[];
	selectedContentWidth: OptionType | null;
	setContentWidth: (selected: OptionType) => void;
	contentWidthArr: OptionType[];
	selectedFont: OptionType | null;
	setSelectedFont: (selected: OptionType) => void;
	fontFamilyOptions: OptionType[];
	selectedSize: OptionType;
	setSelectedSize: (value: OptionType) => void;
	fontSizeOptions: OptionType[];
	selectedColor: OptionType | null;
	setColor: (selected: OptionType) => void;
	fontColors: OptionType[];
	onApply: () => void;
    onReset: () => void;
}

export const ArticleParamsForm = ({
	selectedFont,
	setSelectedFont,
	fontFamilyOptions,
	selectedSize,
	setSelectedSize,
	fontSizeOptions,
	selectedColor,
	setColor,
	fontColors,
	selectedBackground,
	setBackground,
	backgroundColors,
	selectedContentWidth,
	setContentWidth,
	contentWidthArr,
	onApply,
	onReset
	
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);


	const handleOpen = () => {
		setIsOpen(prev => !prev);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply();
	}

	const handleReset = () => {
		onReset();
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleOpen} />
			<aside className={`${styles.container} ${isOpen ? styles.container_open : ''}`}>
				<form className={styles.form} onSubmit={handleSubmit}>

					<Text as = 'h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<FormSettingsFont
					 selectedFont = {selectedFont}
					 setSelectedFont = {setSelectedFont}
					 fontFamilyOptions = {fontFamilyOptions}
					 selectedSize = {selectedSize}
					 setSelectedSize={setSelectedSize}
					 fontSizeOptions = {fontSizeOptions}
					 selectedColor={selectedColor}
					 setColor={setColor}
					 fontColors={fontColors}
					/>

					<Separator />

					<FormViewSettings
						selectedBackground = {selectedBackground}
						setBackground = {setBackground}
						backgroundColors = {backgroundColors}
						selectedContentWidth = {selectedContentWidth}
						setContentWidth = {setContentWidth}
						contentWidthArr = {contentWidthArr}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={handleReset} />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
