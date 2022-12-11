import {Login} from "../../features/auth/login/Login";
import {Registration} from "../../features/auth/registration/Registration";
import {Profile} from "../../features/auth/profile/Profile";
import {Password} from "../../features/auth/password/Password";
import {NewPassword} from "../../features/auth/password/NewPassword";
import {ForgotPassword} from "../../features/auth/password/ForgotPassword";
import {Page404} from "../../features/auth/page404/Page404";
import {StandPage} from "../../features/old/test/StandPage";
import {v1} from "uuid";

// path
export const login = "/login";
export const registration = "/registration";
export const profile = "/profile";
export const password = "/password";
export const newPassword = "/password/newPassword";
export const recoverPassword = "/password/recoverPassword";
export const page404 = "/404";
export const wrongPath = "*";
export const testPage = "/test";

// routes
export const routes = [
    {id: v1(), path: login, component: Login},
    {id: v1(), path: registration, component: Registration},
    {id: v1(), path: profile, component: Profile},
    {id: v1(), path: password, component: Password},
    {id: v1(), path: newPassword, component: NewPassword},
    {id: v1(), path: recoverPassword, component: ForgotPassword},
    {id: v1(), path: page404, component: Page404},
    {id: v1(), path: testPage, component: StandPage},
    {id: v1(), path: wrongPath, component: Page404},
]