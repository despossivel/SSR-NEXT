import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
color:#69;
font-size:40px;`;

const Home = () => <div>
    <Head>
        <title>Usuarios</title>
    </Head>
    <Title>OLÁ</Title>
    <img src="/static/panda.jpg" width="200" />
    <Link href='/users'>
        <a>Usuarios</a>
    </Link>
</div>;

export default withAnalytics()(Home);