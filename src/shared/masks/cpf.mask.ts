const CPFMask = (e: React.FormEvent<HTMLInputElement>): React.FormEvent<HTMLInputElement> => {
  e.currentTarget.maxLength = 14;

  let value = e.currentTarget.value;

  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, ''); // substitui qualquer caracter que nao seja numero por nada
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    e.currentTarget.value = value;
  }

  return e;
};

export default CPFMask;
