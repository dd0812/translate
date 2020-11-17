import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
    // static contextType = LanguageContext; //way to declare a contextType//option 1 to get data out of Context Obj

    renderLang(language){
        return language === 'english' ? 'Submit' : 'toHindi';
    }

    renderColorContext(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language})=> this.renderLang(language)} 
                </LanguageContext.Consumer>
            </button>
        );
    }

    render(){
        // console.log(this.context);
        // const text = this.context === 'english' ? 'Submit' : 'toHindi';
        
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderColorContext(color)}                
            </ColorContext.Consumer>
        );
    }
}

export default Button;