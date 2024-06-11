import React from 'react'
import "../App.css"
import { useLanguageStates } from '../context'
import { languages } from '../utils';

const Navbar = ({handleChangeLA}) => {
    
    const {language} = useLanguageStates();

    const navbarLanguage = () => {
        if(language === languages.español.id){
            return (
                <>
                    <p>{languages.español.text.home}</p>
                    <p>{languages.español.text.current}: Español</p>
                    <button onClick={handleChangeLA}>{languages.español.text.button}</button>
                </>
            )
        }else if(language === languages.portuguesBrasil.id){
            return (
                <>
                    <p>{languages.portuguesBrasil.text.home}</p>
                    <p>{languages.portuguesBrasil.text.current}: Portugues do Brasil</p>
                    <button onClick={handleChangeLA}>{languages.portuguesBrasil.text.button}</button>
                </>
            )
        }else{
            return (
                <>
                    <p>{languages.english.text.home}</p>
                    <p>{languages.english.text.current}: English</p>
                    <button onClick={handleChangeLA}>{languages.english.text.button}</button>
                </>
            )
        }
    }

    return (
        <div className="navbar">
            {navbarLanguage()}
        </div>
    )
}

export default Navbar;