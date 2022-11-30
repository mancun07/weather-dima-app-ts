import React, { useRef, useState } from 'react'
import classes from './UserSearch.module.css'
import { uiActions } from '../../store/uiSlice'
import { useDispatch } from 'react-redux'
import { actionsfetchDataHandler } from '../../store/actions'

const UserSearch: React.FC = () => {
    const [cityIsValid, setCityIsValid] = useState<boolean>(true)
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        let inputRefValue= inputRef.current!.value.trim();

        if (inputRefValue === '') {
            setCityIsValid(false)
            dispatch(uiActions.showNotification({
                message: 'Вы не ввели город!'
            }))
        } else {
            dispatch(actionsfetchDataHandler(inputRefValue))
            if (!cityIsValid) {
                setCityIsValid(true);
            }
            inputRef.current!.value = ''
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    return (
        <form className={classes[`search-form`]} onSubmit={onSubmitHandler}>
            <div className={classes[`form-group`]}>
                <label htmlFor="city">Введите город</label><br />
                <input className={`${!cityIsValid ? classes.notValid : ''}`} ref={inputRef} type="text" id="city" />
            </div>
            <button>Получить данные о погоде</button>
        </form>
    )
}

export default UserSearch
