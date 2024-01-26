// SearchBar.tsx
import React, {useState} from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';
import DatabaseModal from '../DBSelector';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [isConnectionCreatorOpen, setIsConnectionCreatorOpen] = useState(false);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };


    const handleConnectionCreator = (val: boolean) => {
        setIsConnectionCreatorOpen(val);
    }

    return (
        <>
        <TextField
            fullWidth
            sx={{maxWidth: "100000px"}}
            variant="outlined"
            placeholder="Search Connections"
            onChange={handleSearch}
            size='medium'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => handleConnectionCreator(true)}>
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            />
            <DatabaseModal open={isConnectionCreatorOpen} onClose={() => handleConnectionCreator(false)} />
        </>
    );
};

export default SearchBar;
