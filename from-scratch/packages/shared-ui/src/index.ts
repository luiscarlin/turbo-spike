export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('luis');
  }
  return a + b;
};


export const subtr = (a:number, b:number) => {
  return a-b
} 
