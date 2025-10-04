import { useState } from 'react';
import { CSSProperties } from 'react';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import styles from './App.module.scss'

const defaultStyles = {
    '--font-family': defaultArticleState.fontFamilyOption.value,
    '--font-size': defaultArticleState.fontSizeOption.value,
    '--font-color': defaultArticleState.fontColor.value,
    '--container-width': defaultArticleState.contentWidth.value,
    '--bg-color': defaultArticleState.backgroundColor.value
}


export const App = () => {

    const [userStyles, setStyles] = useState(defaultStyles);

        const applySettings = (params: typeof defaultArticleState) => {
            setStyles({
                '--font-family': params.fontFamilyOption.value,
                '--font-size': params.fontSizeOption.value,
                '--font-color': params.fontColor.value,
                '--container-width': params.contentWidth.value,
                '--bg-color': params.backgroundColor.value
            })
        }

        const resetSettings = () => {
            setStyles(defaultStyles);
        }

    return (
        <main
            className={styles.main}
            style={userStyles as CSSProperties}>
            <ArticleParamsForm
                onApply={applySettings}
                onReset={resetSettings}
            />
            <Article/>
        </main>
    );
};
