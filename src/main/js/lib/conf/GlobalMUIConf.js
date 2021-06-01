import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { esES, enUS } from '@material-ui/core/locale';
import i18next from 'i18next';
import { breakpoints } from './Breakpoints';



const locale = i18next.t('zone') == 'en-US' ? enUS : esES;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#993333',
        },
        secondary: {
            main: '#339999',
        }
    },
    breakpoints: {
        values: breakpoints
    },
    typography: {
        //fontFamily: 'Abhaya Libre',
        fontFamily: "Alatsi",
    },
    props: {       

    }
}, locale);

export default function MUITheme ({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}