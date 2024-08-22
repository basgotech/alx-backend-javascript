function calculateNumber(type, a, b) {
    const ab = Math.round(a);
    const ba = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = ab + ba;
	break;
    case 'SUBTRACT':
	c = ab - ba;
	break;
    case 'DIVIDE':
      if (ba === 0) {
            c = "Error";
      } else {
            c = ab / ba;
      }
      break;
    }
    return c;
