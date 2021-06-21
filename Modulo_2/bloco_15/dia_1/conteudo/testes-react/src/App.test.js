import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email.', () => {
  it('Verifique se existe o campo Email.', () => {
    // Acessar os elementos da sua tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');

    // Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verificando se existe um botão de enviar.', () => {
      // Acessar os elementos da sua tela
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
      // Fazer seu teste
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
    //Buscamos o elemento pelo data-testid e depois verificamos se ele está na tela e se é um botão com o texto Enviar .
  });

  it('Verificando se existe dois botões', () => {
    // Acessar os elementos da sua tela
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    // Fazer seu teste
    expect(buttons.length).toBe(2);
    // Observe que usamos o tamanho do buttons para verificar se foram encontrados dois botões.
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    // Primeiro renderizamos a aplicação
    const { getByTestId, getByLabelText } = render(<App />);
    // depois salvamos o email do usuário em uma variável (o que é uma boa prática).
    const EMAIL_USER = 'email@email.com';

    //Depois, verificamos se o h2 onde o email aparece na tela está apenas com o texto Valor: 
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    //Depois procuramos pelo o campo de email e o botão que enviará os dados.
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');

    // Simulamos a digitação do usuário no campo de email 
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });

    //Simulamos um clique no botão com o fireEvent.click(btnSend) , o que simula o clique de quem usa no botão
    fireEvent.click(btnSend);
    
    //Verificamos o campo de email se está vazio e se o h2 onde o valor do email deveria aparecer tem o conteúdo desejado, que é Valor: email@email.com .
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);  
  });
});