class Operations {
  // a: string, b: string
  add(a, b) {
    return a + b;
  }
  // a: string, b: string
  substraction(a, b) {
    return a.replace(b, '');
  }
  // a: string, b: number
  division(a, b) {
    if (typeof b === 'number') {
      const divider = parseInt(a.length / b);
      return a.slice(0, divider);
    }
  }
  // a: string, b: number
  multiplication(a, b) {
    if (typeof b === 'number') {
      let result = '';
      for (let start = 0; start < b; start++) {
        result += a;
      }
      return result.slice(0, 40) + '...';
    }
  }
}

module.exports = Operations;
