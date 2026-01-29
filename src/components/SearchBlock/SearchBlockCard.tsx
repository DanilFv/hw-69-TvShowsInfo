import type {ITvShow} from '../../types';
import SearchBlockCardItem from './SearchBlockCardItem/SearchBlockCardItem.tsx';

interface Props {
    shows: ITvShow[];
    value: string;
    onChange: (value: string) => void;
}

const SearchBlockCard: React.FC<Props> = ({shows, value, onChange}) => {

    return (
         <div style={{ padding: '20px' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <label>Search for TV Show: </label>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    style={{ width: '300px', padding: '5px' }}
                />

                {shows.length > 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        marginTop: '10px',
                        left: '50%',
                        right: 0,
                        border: '1px solid #ccc',
                        backgroundColor: 'white',
                        zIndex: 100
                        }}
                    >
                        {shows.map((show) => (
                            <SearchBlockCardItem key={show.id} show={show} onClick={() => onChange('')} />
                        ))}
                    </div>
                )}
            </div>
         </div>
    );
};

export default SearchBlockCard;