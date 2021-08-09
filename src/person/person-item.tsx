import { Avatar, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "./person.model";

interface Props {
    person: Person;
}

export const PersonItem: React.FunctionComponent<Props> = (props) => {
    return (
        <TableRow className="PersonItem">
            <TableCell>
                <Avatar src={props.person?.thumbnail}></Avatar>
            </TableCell>
            <TableCell>{props.person?.name}</TableCell>
            <TableCell>{props.person?.age}</TableCell>
            <TableCell>{props.person?.height}</TableCell>
            <TableCell>
                <Link to={ `/person/${props.person?.id}`}>Show details
                </Link>
            </TableCell>
        </TableRow>
    )
}


