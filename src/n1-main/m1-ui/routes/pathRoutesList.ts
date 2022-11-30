import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/a2-registration/Registration";
import {Profile} from "../../../n2-features/f1-auth/a3-profile/Profile";
import {Password} from "../../../n2-features/f1-auth/a5-password/Password";
import {NewPassword} from "../../../n2-features/f1-auth/a5-password/NewPassword";
import {RecoverPassword} from "../../../n2-features/f1-auth/a5-password/RecoverPassword";
import {Page404} from "../../../n2-features/f1-auth/a4-page404/Page404";
import {TestPage} from "../../../n2-features/f1-auth/a0-test/TestPage";
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
    {id: v1(), path: recoverPassword, component: RecoverPassword},
    {id: v1(), path: page404, component: Page404},
    {id: v1(), path: testPage, component: TestPage},
    {id: v1(), path: wrongPath, component: Page404},
]