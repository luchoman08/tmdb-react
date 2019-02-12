import React, { Component } from 'react';

import { Separator } from '../Separator';
import  {
    Toolbar,
    AppBar,
    Button
} from '@material-ui/core';

export class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        App bar
                        <Separator />
                        <Button color="inherit"> Search </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
