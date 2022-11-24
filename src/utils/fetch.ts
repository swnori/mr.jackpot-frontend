import { FetchError } from '@/types/fetch';

const { VITE_BASE_URL } = import.meta.env;

const baseUrl = VITE_BASE_URL;

const header = {
  authorization: '',
};

const getHeader = () => {
  const token = window.sessionStorage.getItem('access-token');
  if (token) {
    header.authorization = `bearer ${token}`;
  }
  return header;
};

interface CustomResponse extends Response {
  [key: string]: any;
}

type RequestData = { [key: string]: string | number | any[] };

const fetchApi = {
  get: (path: string): Promise<CustomResponse> =>
    fetch(`${baseUrl}${path}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
    }),

  post: (path: string, body: RequestData): Promise<CustomResponse> =>
    fetch(`${baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    }),

  put: (path: string, body: RequestData): Promise<CustomResponse> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }),

  patch: (path: string, body: RequestData): Promise<CustomResponse> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }),

  delete: (path: string, body?: RequestData): Promise<CustomResponse> =>
    fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }),
};

export default fetchApi;
