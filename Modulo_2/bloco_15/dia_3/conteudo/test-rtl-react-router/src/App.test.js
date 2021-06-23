import React from 'react';
import { fireEvent } from '@testing-library/react';
// Com o fireEvent (que deve ser importado da @testing-library/react ), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre ).
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
//Talvez você esteja se perguntando porque o App não foi importado com {} e o About foi. Isso aconteceu porque só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {} ) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {} .


describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  })
  
  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/));
    const pathname = history.location.pathname; // verificar se estamos na página correta
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/); //verificamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    // utilizamos a função history.push() e passamos como argumento algum link que não existe 
    history.push('/pagina/que-não-exist/');
    //testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.
    const noMath = getByText(/Página não encontrada/i);
    expect(noMath).toBeInTheDocument();
  });

  it('deve renderizar o componente About(apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
})