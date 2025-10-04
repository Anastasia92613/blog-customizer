import { useRef, useState } from 'react';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';

import { defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr, ArticleStateType, OptionType } from 'src/constants/articleProps'

import styles from './ArticleParamsForm.module.scss';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	onApply: (params: typeof defaultArticleState) => void;
    onReset: () => void;
}

export const ArticleParamsForm = ({
	onApply,
	onReset
	
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [params, setParams] = useState(defaultArticleState);
	const asideRef = useRef(null);


	const handleOpen = () => {
		setIsOpen(prev => !prev);
	}

	useOutsideClickClose({isOpen: isOpen, rootRef: asideRef, onChange: handleOpen});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(params);
	}

	const handleReset = () => {
		setParams(defaultArticleState);
		onReset();
	}

	const handleOnChange = (field: keyof ArticleStateType) => {
  		return (value: OptionType) => {
    	setParams((prevState) => ({ ...prevState, [field]: value }));
    };
};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleOpen} />
			<aside className={clsx(`${styles.container} ${isOpen ? styles.container_open : ''}`)} ref = {asideRef} >
				<form className={styles.form} onSubmit={handleSubmit}>

					<Text as = 'h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						selected={params.fontFamilyOption}
						onChange={handleOnChange('fontFamilyOption')}
						options={fontFamilyOptions}
						title='шрифт'
					/>
					<RadioGroup
							selected={params.fontSizeOption}
							name='radio'
							onChange={handleOnChange('fontSizeOption')}
							options={fontSizeOptions}
							title='размер шрифта'
					/>
					<Select
						selected={params.fontColor}
						onChange={handleOnChange('fontColor')}
						options={fontColors}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select 
						selected={params.backgroundColor}
						onChange={handleOnChange('backgroundColor')}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={params.contentWidth}
						onChange={handleOnChange('contentWidth')}
						options={contentWidthArr}
						title='Ширина контента'
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
