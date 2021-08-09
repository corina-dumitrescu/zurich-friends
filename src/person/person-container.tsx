import React, { useEffect, useState } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { PersonDetails } from "./person-details"
import { PersonList } from "./person-list"
import { Person } from "./person.model";

export const PeopleContext = React.createContext<{
    idToPersonMap: IdToPersonMap,
    nameToIdMap: NameToIdMap
}>({
    idToPersonMap: {},
    nameToIdMap: {}
});

interface State {
    people: Person[];
    idToPersonMap: IdToPersonMap;
    nameToIdMap: NameToIdMap
}

interface IdToPersonMap { [key: number]: Person }
interface NameToIdMap { [key: string]: number }

export const PersonContainer: React.FunctionComponent = () => {

    const [state, setState] = useState<State>({
        people: [],
        idToPersonMap: {},
        nameToIdMap: {}
    });

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then(response => response.json())
            .then(data => {
                const people = data.Brastlewark as Person[];
                const idToPersonMap: IdToPersonMap = people.reduce((map, currentPerson) => {
                    return {
                        ...map,
                        [currentPerson.id]: currentPerson
                    }
                }, {})

                const nameToIdMap = people.reduce((map, currentPerson) => {
                    return {
                        ...map,
                        [currentPerson.name]: currentPerson.id
                    }
                }, {} as { [key: string]: number })
                setState({
                    people,
                    idToPersonMap,
                    nameToIdMap
                })
            });
    }, []);

    return (
        <PeopleContext.Provider value={{
            idToPersonMap: state.idToPersonMap,
            nameToIdMap: state.nameToIdMap
        }}>
            <Router>
                <Switch>
                    <Route path="/person/:id" exact>
                        <PersonDetails />
                    </Route>
                    <Route path="/person" exact>
                        <PersonList />
                    </Route>
                    <Route path="/">
                        <Redirect to="/person"></Redirect>
                    </Route>
                </Switch>
            </Router>
        </PeopleContext.Provider >
    )
}