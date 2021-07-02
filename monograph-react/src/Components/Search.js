import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Tabla from './Tabla';

import './Search.css';

const values = [
    {value: 'Fauna', label: 'Fauna'},
    {value: 'Flora', label: 'Flora'},
    {value: 'Historia', label: 'Historia'},
    {value: 'Culturas', label: 'Culturas'},
    {value: 'Animales', label: 'Animales'},
];




export default function Search(props){
    const [value, setValue] = React.useState('Animales');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <form action="">
                    <TextField id="standard-basic" label="Ingresa monografia"/>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Categorias"
                        value={value}
                        onChange={handleChange}
                        helperText="Selecciona una categoria"
                    >
                        
                    {values.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    
                    </TextField>
                </form>
            </Container>
            <Tabla></Tabla>      
        </div>
    );
}
