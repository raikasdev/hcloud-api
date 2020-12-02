class hcloudError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "hCloudError"; // (2)
    }
}

module.exports = hcloudError;