import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
    static propTypes = {
        value: PropTypes.string, // значение инпута по умолчанию
        name: PropTypes.string, // имя компонента
        type: PropTypes.string, // тип инпута (ввод текста, пароля, мыла и прочего)
        onChange: PropTypes.func, // классы для стилизации компонента
        placeholder: PropTypes.string, // плейсхолдер (подсказка)
        ariaDescribedBy: PropTypes.string, // значение для подсказки внизу инпута
        className: PropTypes.string, // функция обработчик события изменения содержиммого инпута
        readOnly: PropTypes.bool,
    };

    static defaultProps = { // значение пропсов по умолчанию (если они не переданы в компонент)
        className: 'form-control',
        type: 'text',
    };


    constructor(props, context) {
        super(props, context); // для использования this.props, переданного через родителя

    };

    render() {
        return (
            <>
                <input 
                    type={ this.props.type }
                    className={ this.props.className }
                    id={ this.props.name }
                    name={ this.props.name }
                    aria-describedby={ this.props.ariaDescribedBy }
                    placeholder={ this.props.placeholder }
                    onChange={this.props.onChange }
                    readOnly={ this.props.readOnly }
                 />
            </>
        )
    }
}
// <>...</> эквивалентно <React.Fragment>...</React.Fragment>