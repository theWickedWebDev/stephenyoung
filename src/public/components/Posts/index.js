import React from 'react';
import LazyLoad from 'components/LazyLoad/LazyLoad';

import './styles.scss';

const Posts = props => {
  const { references } = props;

  return (
    <ul className="posts_list_component">
      { references.map((ref, index) => (
        <li
          key={index}
          className={`posts_list-item ${ref.relevant ? 'strong' : ''}`}
          data-aos={index % 2 ? "fade-left" : "fade-right"}
        >
          <div className="posts_list_content clearfix">
            { ref.image &&
              <LazyLoad>
                <img src={ref.image} width="70px"/>
              </LazyLoad>
            }
            <quote className="posts_list_quote">"{ref.content}"</quote>
          </div>

          { ref.link
            ? <p className="posts_list_name">
                — <a href={ref.link} target="_blank">
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
