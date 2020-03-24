import React from 'react';
import LazyLoad from 'components/LazyLoad';

import './styles.scss';

const Posts = props => {
  const { references } = props;

  const getPostHeader = ref => {
    return `${ref.content.split('.')[0]}.`;
  };

  const getPostBody = ref => {
    return `${ref.content.split('.').slice(1, ref.content.split('.').length - 1).join('. ')}`;
  };

  return (
    <ul className="posts_list_component">
      { references.map((ref, index) => (
        <li
          key={index}
          className={`posts_list-item ${ref.relevant ? 'strong' : ''}`}
        >
          <div className="posts_list_content clearfix">
            { ref.image &&
              <LazyLoad>
                <img
                  src={ref.image}
                  width="70px"
                  alt={"Photo of coworker " + ref.name}
                  title={getPostHeader(ref)}
                />
              </LazyLoad>
            }
            <blockquote className="posts_list_quote">
              <h3>{getPostHeader(ref)}</h3>
              <p>{getPostBody(ref)}</p>
            </blockquote>
          </div>

          { ref.link
            ? <p className="posts_list_name">
                <a href={ref.link} target="_blank" title={ref.title}>
                  <strong>{ref.name}</strong>, <em>{ref.title}</em>
                </a>
              </p>
            : <p className="posts_list_name">
                — <strong>{ref.name}</strong>, <em>{ref.title}</em>
              </p>
          }
        </li>
      ))}
    </ul>
  );
};

export default Posts;
