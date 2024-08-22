function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let d = 0;
    switch (type) {
    case 'SUM':
	d = an + bn;
	break;
    case 'SUBTRACT':
	d = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            d = "Error";
      } else {
            d = an / bn;
      }
      break;
    }
    return d;
}

module.exports = calculateNumber;
