import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext; //creates a link between our class and context obj
        
    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return(
            <div>
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;