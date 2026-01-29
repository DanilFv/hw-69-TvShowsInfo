import {NavLink} from 'react-router-dom';
import type {ITvShow} from '../../../types';
import * as React from 'react';

interface Props {
    show: ITvShow;
    onClick: () => void;
}

const SearchBlockCardItem: React.FC<Props> = ({show, onClick}) => {
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
            onClick={onClick}
        >
            {show.name}
        </NavLink>
    );
};

export default SearchBlockCardItem;