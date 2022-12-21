import {useState} from "react";

/*
function InputExample() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    }  

    const onChangeSurname = (event) => {
        setSurname(event.target.value);
    }  

    return (
        <div>
            Name
            <br />
            <input value={name} onChange={onChangeName} />
            <br />
            Surname
            <br />
            <input value={surname} onChange={onChangeSurname} />
            <br />
            {name} {surname}
        </div>
    )   
}
*/

function InputExample() {
    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };  

    return (
        <div>
            Name
            <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            Surname
            <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            {form.name} {form.surname}
        </div>
    );   
}



export default InputExample;