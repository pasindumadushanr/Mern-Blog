export const errorHandler = (err, req, res, next) => (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    next(error);
};
