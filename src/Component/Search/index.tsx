// SearchBar.tsx
import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onAdd: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onAdd }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
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
                        <IconButton onClick={onAdd}>
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;
