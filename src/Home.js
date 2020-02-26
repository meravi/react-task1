import React, { Component } from 'react'
import Header from './dr-components/Header';
import Recent from './dr-components/RecentStory';
import FeaturedPost from './dr-components/FeaturedPost';
import Holiday from './dr-components/Holiday';
import Newsletter from './dr-components/Newsletter';
import FrontPage from './dr-components/FrontPage';
import SinglePost from './dr-components/SinglePost';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
    export default class Home extends Component {
            render() {
                return (
                    <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' exact component={FrontPage} />
                            <Route path='/holiday' component={Holiday} />
                            <Route path='/recent' component={Recent} />
                            <Route path='/features' component={FeaturedPost} />
                            <Route path="/single" component={SinglePost} />
                        </Switch>
                        <Newsletter />
                    </div>
                    </BrowserRouter>
                );
            }
        }
