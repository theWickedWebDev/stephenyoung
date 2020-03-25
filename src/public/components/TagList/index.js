import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagList = (props) => {
    return (
        <ul className="tag-list">
            { props.list.map((item, index) => {
                return <li
                    className="tag-list-item"
                    key={`${index }-tag`}
                >
                    <span>{ item.name }</span>
                    { item.favorite &&
          <FontAwesomeIcon icon="heart" className="tag-list-icon"/>
                    }
                </li>;
            }
            )}
        </ul>
    );
};

export default TagList;
