import { useEffect } from 'react'
import './FilterCheckbox.css'

export default function FilterCheckbox({
    searchMovie,
    inputValue,
    isSavedMoviesPage,
    checked,
    setChecked
}) {
    useEffect(() => {
        if (isSavedMoviesPage) {
            setChecked(false);
            return;
        }
        localStorage.getItem('isShort') !== null
            ? setChecked(JSON.parse(localStorage.getItem('isShort')))
            : localStorage.setItem('isShort', checked)
    }, [])

    function handleCheckboxChange(e) {
        const isCheckBoxSetShort = e.target.checked;
        if (!isSavedMoviesPage) {
            localStorage.setItem('isShort', isCheckBoxSetShort)
        }
        console.log('check box initiated movie search');
        searchMovie(isSavedMoviesPage, inputValue, isCheckBoxSetShort);
        setChecked(!checked);
    }

    return (
        <div className='filter'>
            <input className='filter__checkbox'
                type='checkbox'
                id='search__checkbox'
                name='filter__checkbox'
                checked={checked}
                onChange={handleCheckboxChange} />
            <label
                className='filter__label'
                htmlFor='search__checkbox'
            >Короткометражки</label>
        </div>

    )
}
