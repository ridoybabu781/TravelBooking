export const validator = (schema) => {
    return (req, res, next) => {
        try {
            const parse = schema.parse({
                body: req.body,
                params: req.params,
            });
            req.body = parse.body;
            req.params = parse.params;
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
//# sourceMappingURL=validator.js.map