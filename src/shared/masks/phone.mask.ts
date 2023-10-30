const PhoneMask = (e: React.FocusEvent<HTMLInputElement>): React.FormEvent<HTMLInputElement> => {
  let value = e.currentTarget.value;

  value = value.replace(/\D/g, '');

  if (value.length == 9) {
    value = value.replace(/^(\d{5})(\d{4}).*/, '$1-$2');
  } else if (value.length == 11) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (value.length > 11) {
    value = value.replace(/^(\d{2})(\d{2})(\d{5})(\d{4}).*/, '+$1 ($2) $3-$4');
  }

  e.currentTarget.value = value;
  return e;
};

export default PhoneMask;
