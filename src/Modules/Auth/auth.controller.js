import { Router } from "express";
import * as authService from "./auth.service.js";
import { asyncHandler } from "../../utils/error handling/asyncHandler.js";
import { validation } from "../../Middlewares/validation.middleware.js";
import * as authValidation from "./auth.validation.js";
const router = Router();

router.post(
    "/register",
    validation(authValidation.registerSchema),
    asyncHandler(authService.register)
);

router.post(
    "/login",
    validation(authValidation.loginSchema),
    asyncHandler(authService.login)
);

router.get(
    "/activate_account/:token",
    asyncHandler(authService.activateAccount)
);

export default router;