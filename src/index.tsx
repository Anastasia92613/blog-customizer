import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useRef } from 'react';
import clsx from 'clsx';
import { useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, defaultStyles } from './constants/articleProps';


import './styles/index.scss';
import styles from './styles/index.module.scss';


import { fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps'

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
		const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
		const [selectedSize, setSelectedSize] = useState(fontSizeOptions[0]);
		const [selectedColor, setColor] = useState(fontColors[0]);
		const [selectedBackground, setBackground] = useState(backgroundColors[0]);
		const [selectedContentWidth, setContentWidth] = useState(contentWidthArr[0]);
		
		const [userStyles, setStyles] = useState(defaultStyles);

		const applySettings = () => {
			setStyles({
				'--font-family': selectedFont.value,
				'--font-size': selectedSize.value,
				'--font-color': selectedColor.value,
				'--container-width': selectedContentWidth.value,
				'--bg-color': selectedBackground.value
			})
		}
		

		const resetSettings = () => {
			setSelectedFont(fontFamilyOptions[0]);
			setSelectedSize(fontSizeOptions[0]);
			setColor(fontColors[0]);
			setBackground(backgroundColors[0]);
			setContentWidth(contentWidthArr[0]);
			setStyles(defaultStyles);
		}

	return (
		<main
			className={clsx(styles.main)}
			style={userStyles as CSSProperties}>
			<ArticleParamsForm
				selectedFont = {selectedFont}
				setSelectedFont = {setSelectedFont}
				fontFamilyOptions = {fontFamilyOptions}
				selectedSize = {selectedSize}
				setSelectedSize={setSelectedSize}
				fontSizeOptions = {fontSizeOptions}
				selectedColor={selectedColor}
				setColor={setColor}
				fontColors={fontColors}
				selectedBackground = {selectedBackground}
				setBackground = {setBackground}
				backgroundColors = {backgroundColors}
				selectedContentWidth = {selectedContentWidth}
				setContentWidth = {setContentWidth}
				contentWidthArr = {contentWidthArr}
				onApply={applySettings}
                onReset={resetSettings}
			/>
			<Article/>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
