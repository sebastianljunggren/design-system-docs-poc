import createDocumentationComponent from '../createComponentDocumentation';
import Display from './ButtonDisplay';
import Config from './ButtonConfig';

const id = 'button';
const name = 'Button';
const options = {
    type: 'primary',
    outline: false,
    size: ''
};
const Button = createDocumentationComponent(Display, Config, options, {id, name});

export default Button;
export {id, name};