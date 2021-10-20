import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({children}) {
    return (
        <div>
            <Header />
            <h2>Page Components</h2>
            {children}
        </div>
    );
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any,
};