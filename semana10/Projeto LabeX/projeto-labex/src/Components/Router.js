import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import TripDetailsPage from './TripDetailsPage/TripDetailsPage';
import CreateTripPage from './CreateTripPage/CreateTripPage';
import ListTripPage from './ListTripsPage/ListTripsPage';
import Page404 from './404/404';
import ApplicationFormPage from './ApplicationFormPage/ApplicationFormPage';
import CreateNewUserPage from './CreateNewUserPage/CreateNewUserPage';

function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path ="/trip-details/:tripId">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/create-trip">
                    <CreateTripPage />
                </Route>
                <Route exact path="/create-new-user">
                    <CreateNewUserPage />
                </Route>
                <Route exact path="/list-trip">
                    <ListTripPage />
                </Route>
                <Route exact path="/formulario">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/">
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
    }

export default Router