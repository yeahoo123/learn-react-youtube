import React, { useState } from 'react';

function TodoForm({onSubmit}) {
    const [value, setValue] = useState("")
    const onValueChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()//stop reload browser
        if(!onSubmit) return

        const formValues = {
            title: value
        }
        onSubmit(formValues)
        //reset form value
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={onValueChange}/>
        </form>
    );
}

export default TodoForm;