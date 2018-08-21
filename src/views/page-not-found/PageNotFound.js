import React from 'react';
import Error from '../../components/error/Error';
import './PageNotFound.css';

export class PageNotFound extends React.Component {

    render(){
        return(
            <Error title="Page not found" body="We can't find the page you're looking for." showRedirect={true} />
        )
    }
}

export default PageNotFound;