import React from 'react';
import Button from "../../Button/Button";

export default function Search() {
    return (
        <form action="" className="search">
            <input type="text" name="search" className="search__input typo-place-holder" placeholder="Číslo zakázky nebo jmeno klienta"/>
            <Button name="search"/>
        </form>
    )
}
