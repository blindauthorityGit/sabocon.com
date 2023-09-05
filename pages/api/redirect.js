module.exports = (req, res) => {
    const path = req.url;

    if (path === "/berrychristmas") {
        res.writeHead(302, {
            Location: "https://example.com/new-page",
        });
        res.end();
    } else {
        // Handle other routes or return a 404 error.
        res.status(404).end();
    }
};
