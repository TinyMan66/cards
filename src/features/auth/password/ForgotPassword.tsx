import React from 'react';
import {InputText} from "../../../common/components/inputText/InputText";
import {Button} from "../../../common/components/button/Button";
import {login} from "../../../common/routes/pathRoutesList";

export const ForgotPassword = () => {
   const onChangeHandler = () => {
    }

    const onclickHandler = () => {
    }
    return (
        <form>
            <h3>Forgot your password?</h3>

            <div>
                <InputText type='email' placeholder='Email' onChange={onChangeHandler}/>
                <span>Enter your email address and we will send you further instructions</span>
            </div>

            <Button name={'Send Instructions'} onClick={onclickHandler}/>
            <div><span>Did you remember your password?</span></div>
            <div><a href={`#${login}`}>Try to logging in</a></div>
        </form>
    )
}