import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { esES } from '@material-ui/core/locale';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#882136',
        },
        secondary: {
            main: '#328821',
        }
    },    
    props: {       

    }
}, esES);

export default function MUITheme ({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}