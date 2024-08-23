import { useMatches } from 'react-router-dom';

import { breadcrumbs, crumb as StCrumb } from './breadcrumbs.css';

function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className="container mx-auto px-4">
      <ol className={breadcrumbs}>
        {crumbs.map((crumb, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={StCrumb} key={index}>
            {crumb}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
