const fetchDetails = url => {
  return fetch(url)
    .then(rawdata => rawdata.json())
    .then(response => response);
};

const postDetails = async (url, data) => {
  const rawresponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  });
  return rawresponse.json();
};

const wrapPromise = promise => {
  let status = 'pending';
  let result = '';
  let suspender = promise.then(
    response => {
      status = 'success';
      result = response;
    },
    err => {
      status = 'error';
      result = err;
    }
  );
  return {
    getStats() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }
      return result;
    }
  };
};

export const createApiResource = (url, data) => {
  return {
    details: wrapPromise(fetchDetails(url)),
    postDetails: wrapPromise(postDetails(url, data))
  };
};
