const router = require("express").Router();
const userController = require("./controller");
const { check, validationResult } = require("express-validator");
module.exports = (app) => {
  router.get("/", userController.getAll);
  router.get("/:id", userController.getById);
  router.post(
    "/signup",
    [
      check("username")
        .isLength({ min: 3 })
        .withMessage("the name must have minimum length of 3")
        .trim(),
      check("fullname")
        .isLength({ min: 3 })
        .withMessage("the name must have minimum length of 3")
        .trim(),

      check("email")
        .isEmail()
        .withMessage("invalid email address")
        .normalizeEmail(),

      check("password")
        .isLength({ min: 8, max: 15 })
        .withMessage(
          "your password should have min and max length between 8-15"
        )
        .matches(/\d/)
        .withMessage("your password should have at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage(
          "your password should have at least one sepcial character"
        ),

      // check("confirmPassword").custom((value, { req }) => {
      //   if (value !== req.body.password) {
      //     console.log(req.body.password, req.body.confirmPassword);
      //     throw new Error("confirm password does not match");
      //   }
      //   return true;
      // }),
    ],
    (req, res, next) => {
      const error = validationResult(req).formatWith(({ msg }) => msg);
      const hasError = !error.isEmpty();
      if (hasError) {
        res.status(422).json({ error: error.array() });
      } else {
        return userController.create(req, res);
      }
    }
  );

  router.put("/:id", userController.update);
  router.delete("/:id", userController.delete);
  app.use("/users", router);
};
