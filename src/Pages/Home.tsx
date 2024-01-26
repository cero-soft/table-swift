// App.tsx
import React, { useState } from 'react';
import SearchBar from '../Component/Search';
import {  Container, Box} from '@mui/material';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Perform search logic here...
    };

    const handleAdd = () => {
        // Handle add logic here...
        console.log('Add button clicked');
    };

    return (
        <Container maxWidth="lg" sx={{ mx: "auto" }}>
            <Box sx={{width: "100%", maxWidth: "500px", mx:"auto"}}>
                <SearchBar onSearch={handleSearch} onAdd={handleAdd} />
            </Box>
        </Container>
    );
};

export default Home;
