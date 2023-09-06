import { Fragment } from 'react';

function layout(props){
    return <Fragment>

<main>
    {props.children}
</main>



    </Fragment>
}

export default layout