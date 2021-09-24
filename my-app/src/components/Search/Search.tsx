import classes from './Search.module.css';
import cn from 'classnames';

interface ISearch {
    value?: any;
    onChange?(value: any): void;
    children?: string;
    placeholder?: string;
    }

const Search: React.FC<ISearch> = (props) => {

    const {
        value,
        children = 'Search',
        placeholder = 'search...'
    } = props;

    const inputClass = cn({
        [classes.input]: true,
        [classes.filled]: value.length,
    })

    return (
        <label className={classes.label}>
            {children}
            <input
            className={inputClass}
            type='text'
            value={props.value}
            onChange={props.onChange}
            placeholder={placeholder}
            />
        </label>
    )
}

export default Search

