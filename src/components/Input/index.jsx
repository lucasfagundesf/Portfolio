import React from 'react';
import { Container } from './styles';

export function Input({ icon, label, ...rest }) {
    return (
        <Container>
            <input {...rest} placeholder=' '/>
            {icon}
            <label>{label}</label>
        </Container>
    );
}