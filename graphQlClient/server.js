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
        data.data.fruits.forEach(element => {
            console.log(element);
        });
    } catch (error) {
        console.error(error);
    }
}
fetchFakeServer();