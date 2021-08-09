import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { PeopleContext } from "./person-container";
import { PersonItem } from "./person-item";
import './person-list.scss'

export const PersonList: React.FunctionComponent = () => {
    const context = useContext(PeopleContext);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow className="TableContainer">
                        <TableCell>Avatar</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell >Age</TableCell>
                        <TableCell>Height</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(context?.idToPersonMap).map(person =>
                        <PersonItem key={person.id} person={person}></PersonItem>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

