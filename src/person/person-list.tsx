import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { PeopleContext } from "./person-container";
import { PersonItem } from "./person-item";
import './person-list.scss'


const CustomTableCell = withStyles({
    root: {
        fontSize: '22px'
    }
})(TableCell)


export const PersonList: React.FunctionComponent = () => {
    const context = useContext(PeopleContext);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow className="table-container">
                        <CustomTableCell>Avatar</CustomTableCell>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell >Age</CustomTableCell>
                        <CustomTableCell>Height</CustomTableCell>
                        <CustomTableCell>Action</CustomTableCell>
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

