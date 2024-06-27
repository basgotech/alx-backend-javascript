async function handleResponseFromAPI(promise) {
  try {
    await promise;
    return {
      status: 200,
      body: 'success',
    };
  } catch (error) {
    throw new Error('An error occurred while handling the API response');
  } finally {
    console.log('Got a response from the API');
  }
}

export default handleResponseFromAPI;
