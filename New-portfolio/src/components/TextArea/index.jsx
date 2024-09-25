import React from 'react';
import { Container } from './styles';

export function TextArea({ icon, label, ...rest }) {
    return (
        <Container>
            <textarea {...rest} placeholder=' '/>
            {icon}
            <label>{label}</label>
        </Container>
    );
}