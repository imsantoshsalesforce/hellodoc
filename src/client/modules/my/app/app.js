import { LightningElement } from 'lwc';
const defaultData = {
    Name: '',
    Age: ''
}

export default class App extends LightningElement {

    // local property
    formData = defaultData;

    // Method on form change
    formChange(event) {
        const { name, value } = event.target;
        // console.log(name + ":" + value);
        this.formData = { ...this.formData, [name]: value }
    }
    // Method on submit
    checkHandler(event) {
        event.preventDefault();
        console.log(this.formData);
    }
}
