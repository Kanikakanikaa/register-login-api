const { check, validationResult, body } = require("express-validator");

  exports.loginValidationRules = [
        body('email')
          .notEmpty()
          .withMessage('Please enter your email ')
        //   .bail()
          .isLength({ min:6 })
        //   .bail()
          .custom((value, { req }) => {
            // Custom validation logic to check if it's a valid email or username
            const isValidEmail = /^\S+@\S+\.\S+$/.test(value);
            // const isValidUsername = /^[a-zA-Z0-9_]+$/.test(value);
      
            if (!isValidEmail ) {
              throw new Error('Invalid email');
            }
      
            // You can store the validated value in the request object if needed
            req.validatedCredential = value;
      
            return true;
          }),
        body('password')
          .notEmpty()
          .withMessage('Please enter a password'),
      ];

      exports.validate = (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          return next();
        }
        const extractedErrors = [];
        errors.array().map((err) => extractedErrors.push({ message: err.msg }));
      
        return res.status(422).json({
          errors: extractedErrors,
        });
      };

