module.exports = (req, res) => {
    const path = req.url;

    if (path === "/berrychristmas") {
        res.writeHead(302, {
            Location: "https://spark.adobe.com/page/gtMOc0Olrvnf3/",
        });
        res.end();
    } else {
        // Handle other routes or return a 404 error.
        res.status(404).end();
    }
};
