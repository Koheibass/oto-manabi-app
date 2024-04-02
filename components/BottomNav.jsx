import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Link from 'next/link';


export default function BottomNav() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction LinkComponent={Link} href={"/"} label="ホーム" icon={<HomeIcon />} />
                <BottomNavigationAction label="質問LIVE" icon={<LiveTvIcon />} />
                <BottomNavigationAction label="メンタル" icon={<PsychologyIcon />} />
                <BottomNavigationAction label="楽典" icon={<LibraryMusicIcon />} />
                <BottomNavigationAction label="りなコラム" icon={<MusicNoteIcon />} />
            </BottomNavigation>
        </Box >
    );
}