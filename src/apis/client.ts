const { VITE_BASE_URL } = import.meta.env;

export const fetchHelloWorld = () =>
  fetch(`${VITE_BASE_URL}/helloworld`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
