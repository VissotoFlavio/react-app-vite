export const ValidatorCPF = (value: string): boolean => {
  const cpf = value.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
    return false;
  }

  const arrayCpf = cpf.split('').map((el: string) => +el);

  const rest = (count: number) =>
    ((arrayCpf.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10;

  return rest(10) === arrayCpf[9] && rest(11) === arrayCpf[10];
};
