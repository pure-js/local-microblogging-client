import { useMatches } from "react-router-dom";

import classes from './breadcrumbs.module.css';

export function Breadcrumbs() {
    const matches = useMatches();
    const crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    return (
        <ol className={classes.breadcrumbs}>
            {crumbs.map((crumb, index) => (
                <li className={classes.crumb} key={index}>{crumb}</li>
            ))}
        </ol>
    );
}

export default Breadcrumbs;
