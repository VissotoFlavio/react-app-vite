interface String {
  onlyNumber(): number;
  capitalize(): string;
}

String.prototype.onlyNumber = function (): number {
  return Number(this.replace(/\D/g, ''));
};

String.prototype.capitalize = function (): string {
  if (!this) {
    return '';
  }
  return this.trim()
    .split(' ')
    .map((word) => {
      return word[0].toLocaleUpperCase().concat(word.substring(1).toLocaleLowerCase());
    })
    .join(' ');
};

// export class StringExtension extends String {
//   constructor(value = '') {
//     super(value);
//   }

//   onlyNumber = (): number => {
//     return Number(this.replace(/\D/g, ''));
//   };
// }
