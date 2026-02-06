async function fetchFakeServer() {
    try {
        const res = await fetch('http://localhost:9000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
          query {
            greeting
            fruits
          }
        `,
            }),
        });

        const data = await res.json();
        console.log(data.data);
    } catch (error) {
        console.error(error);
    }
}
fetchFakeServer();