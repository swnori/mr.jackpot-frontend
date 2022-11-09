export const fetchHelloWorld = () =>
  fetch('https://mr-jackpot-api.run.goorm.io/helloworld', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
