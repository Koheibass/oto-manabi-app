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
        <Box sx={{ width: 100 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction LinkComponent={Link} href={"/"} label="ホーム" icon={<HomeIcon />} />
                <BottomNavigationAction LinkComponent={Link} href={"/Maincontents/questioncontent"} label="質問LIVE" icon={<LiveTvIcon />} />
                <BottomNavigationAction LinkComponent={Link} href={"/Maincontents/mentalcontent"} label="メンタル" icon={<PsychologyIcon />} />
                <BottomNavigationAction LinkComponent={Link} href={"/Maincontents/mgrammercontent"} label="楽典" icon={<LibraryMusicIcon />} />
                <BottomNavigationAction LinkComponent={Link} href={"/Maincontents/columncontent"} label="りなコラム" icon={<MusicNoteIcon />} />
            </BottomNavigation>
        </Box >
    );
}