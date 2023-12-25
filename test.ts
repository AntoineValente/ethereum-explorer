console.log(
  'https://google.com?' +
    new URLSearchParams({
      a: '1',
      b: '2',
    }).toString(),
);
