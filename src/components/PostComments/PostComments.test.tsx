import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve inserir um comentario', () => {
        render(<App/>)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value:'novo comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('novo comentario')).toBeInTheDocument()
    })

    test('Deve inserir outro comentario', () => {
        render(<App/>)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value:'novo comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('novo comentario')).toBeInTheDocument()
    })
});