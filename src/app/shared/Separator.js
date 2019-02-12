import React, { Component } from 'react';



export class Separator extends  Component {
    classes;
    constructor( props ) {
        super(props);
        this.classes = props;
    }
    render() {
        return (
            <span className="grow"> </span>
        );
    }
}
