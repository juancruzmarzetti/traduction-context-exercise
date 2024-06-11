import React from 'react';
import { useLanguageStates } from '../context';
import { languages } from '../utils';

const Body = () => {
    
    const {language} = useLanguageStates();
    
    const bodyLanguage = () => {
        if(language === languages.español.id){
            return (
                <>
                    <h1>{languages.español.text.title}</h1>
                    <p>{languages.español.text.description}</p>
                </>
            )
        }else if(language === languages.english.id){
            return (
                <>
                    <h1>{languages.english.text.title}</h1>
                    <p>{languages.english.text.description}</p>
                </>
            )
        }else{
            return (
                <>
                    <h1>{languages.portuguesBrasil.text.title}</h1>
                    <p>{languages.portuguesBrasil.text.description}</p>
                </>
            )
        }
    }
    
    return (
        <>
            {bodyLanguage()}
        </>
    )
}

export default Body;