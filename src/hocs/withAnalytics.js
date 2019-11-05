import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGa from 'react-ga';

export default () => Composed => class extends Component {
    static getInitialProps(ctx) {
        return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
        console.log('aqui')
        ReactGa.initialize('id');
        ReactGa.pageview(window.location.pathname);
    }

    render() {
        return <Composed {...this.props} />
    }
}