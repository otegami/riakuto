const greet = (friend: 'Serval' | 'Caracal' | 'Cheetah') => {
  switch(friend) {
    case 'Serval':
      return `Hello, ${friend}`
    case 'Caracal':
      return `Hi, ${friend}`
    case 'Cheetah':
      return `Hey: ${friend}`
    default:
      const check: never = friend
  }
}

console.log(greet('Serval'))
