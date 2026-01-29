import {NavLink} from 'react-router-dom';
import type {ITvShow} from '../../../types';
import * as React from 'react';

interface Props {
    show: ITvShow;
}

const SearchBlockCardItem: React.FC<Props> = ({show}) => {
    return (
        <NavLink
            to={`/shows/${show.id}`}
            style={{
                display: 'block',
                padding: '10px',
                textDecoration: 'none',
                color: 'black',
                borderBottom: '1px solid #eee'
            }}
        >
            {show.name}
        </NavLink>
    );
};

export default SearchBlockCardItem;