import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { esES, enUS } from '@material-ui/core/locale';
import i18next from 'i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import { breakpoints } from './Breakpoints';



const locale = i18next.t('zone') == 'en-US' ? enUS : esES;

const color = {
    primary: '#ba3742',
    secondary: '#37baaf'
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: color.primary,
        },
        secondary: {
            main: color.secondary,
        }
    },
    breakpoints: {
        values: breakpoints
    },
    typography: {        
        fontFamily: "Cabin",
    },
    props: {       

    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    height: '100%',
                    padding: 0,
                    margin: 0
                },
            },
        },
        MuiTypography: {
            h1: {
                fontFamily: 'Alatsi',
            },
            h2: {
                fontFamily: 'Alatsi',
            },
            h3: {
                fontFamily: 'Alatsi',
            },
            h4: {
                fontFamily: 'Alatsi',
            },
            h5: {
                fontFamily: 'Alatsi',
            },
            h6: {
                fontFamily: 'Alatsi',
            }
        },
        MuiChip: {
            root: {
                margin: '1px'
            }
        },
        MuiSpeedDial: {
            fab: {
                backgroundColor: color.secondary,
                '&:hover': {
                    backgroundColor: color.secondary,
                }
            }
        },
        MuiFormControl: {
            root: {
                margin: '5px 10px',
                minWidth: '100px',
                width: '200px'
            }
        },
        MuiCardHeader: {
            root: {
                padding: '10px'
            }
        },
        MuiDialogTitle: {
            root: {
                padding: '10px'
            }
        },
        MuiCardContent: {
            root: {
                padding: '0 10px'
            }
        },
        MuiCard: {
            root: {
                margin: '2px'
            }
        }

    }
}, locale);

export default function MUITheme ({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}