/**
 * An autogenerated component that renders the SQRT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');
const PropTypes = require('prop-types');

class Sqrt extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 29l4 6 9-14h7"/></g></svg>;
    }
}

module.exports = Sqrt;
