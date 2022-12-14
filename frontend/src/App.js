import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/layout';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { getProducts} from './actions/products.js'



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])


    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAdmin(true)
        }, 3000)
    })

    return (
        <Router>
            {/* {admin ? 
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    // <Layout>
                                        <Page />
                                    // </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div> 
            : */}
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            {/* } */}
        </Router>
    );
}

export default App;
