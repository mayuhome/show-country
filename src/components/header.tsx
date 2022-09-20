import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
export const HeaderComponent = () => {
    return <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
    <span>
        Where in the World?
    </span>
    <span style={{fontSize: '1.4rem', 'fontWeight': '400', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        <DarkModeOutlinedIcon/>
        Dark Mode
    </span>
    </div> 
}