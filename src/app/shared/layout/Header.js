import React, { Component } from 'react';
import styles from './Header.scss';
import  {
    Toolbar,
    AppBar,
    Button
} from '@material-ui/core';

export class Header extends Component {
    render() {
        console.log(styles);
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <p className={styles.grow}>App Bar</p>
                        <Button color="inherit"> Search </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
