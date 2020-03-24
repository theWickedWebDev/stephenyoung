import React from 'react'
import Article from 'components/Article';
import TagList from 'components/TagList';

const Skills = () => {
  const copy = {
    "title": "Support others. Stay positive. Embrace Change. Take Risks.",
    "tech": {
      "title": "Technologies/Languages/Frameworks",
      "content": [
        {"name": "Javascript", "favorite": true, "strong": true },
        {"name": "Node", "favorite": true, "strong": true },
        {"name": "React", "favorite": true, "strong": true },
        {"name": "Redux", "favorite": false, "strong": true },
        {"name": "GraphQl", "favorite": true, "strong": true },
        {"name": "Elastic Search", "favorite": true, "strong": true },
        {"name": "AWS", "favorite": false, "strong": false },
        {"name": "Docker", "favorite": true, "strong": false },
        {"name": "Keycloak", "favorite": false, "strong": false },
        {"name": "Auth0", "favorite": true, "strong": false },
        {"name": "Apollo", "favorite": false, "strong": false },
        {"name": "Flow", "favorite": false, "strong": false },
        {"name": "Webpack", "favorite": true, "strong": true },
        {"name": "Gulp", "favorite": false, "strong": false },
        {"name": "Storybook", "favorite": true, "strong": true },
        {"name": "NPM", "favorite": false, "strong": false },
        {"name": "MySql", "favorite": false, "strong": false },
        {"name": "Angular", "favorite": false, "strong": false },
        {"name": "jQuery", "favorite": false, "strong": false },
        {"name": "HTML5", "favorite": true, "strong": true },
        {"name": "CSS3", "favorite": true, "strong": true },
        {"name": "SCSS/LESS", "favorite": true, "strong": true },
        {"name": "Karma", "favorite": false, "strong": false },
        {"name": "Enzyme", "favorite": false, "strong": false },
        {"name": "Drupal", "favorite": false, "strong": false }
      ]
    },
    "other": {
      "title": "Other things I've learned or used",
      "content": [
        {"name": "SEO", "favorite": true, "strong": false },
        {"name": "Site performance", "favorite": true, "strong": false },
        {"name": "A/B testing", "favorite": true, "strong": false },
        {"name": "Jest", "favorite": false, "strong": false },
        {"name": "Lambda", "favorite": false, "strong": false },
        {"name": "Git", "favorite": false, "strong": true },
        {"name": "Firebase", "favorite": false, "strong": false },
        {"name": "Tealium", "favorite": false, "strong": false },
        {"name": "GA", "favorite": false, "strong": false },
        {"name": "KISSmetrics", "favorite": false, "strong": false },
        {"name": "Optimizely", "favorite": false, "strong": false },
        {"name": "FileStack", "favorite": false, "strong": false },
        {"name": "Balsamiq", "favorite": false, "strong": false },
        {"name": "InvisionApp", "favorite": true, "strong": false },
        {"name": "Adobe Photoshop", "favorite": true, "strong": true },
        {"name": "Adobe Illustrator", "favorite": true, "strong": true },
        {"name": "Adobe After Effects", "favorite": true, "strong": false },
        {"name": "Jira", "favorite": false, "strong": false },
        {"name": "Confluence", "favorite": false, "strong": false },
        {"name": "GtMetrix", "favorite": false, "strong": false }
      ]
    }
  };

  return (
    <Article title={copy.title}>
      <TagList
        list={copy.tech.content}/>
      <br/>
      <TagList
        list={copy.other.content}/>
    </Article>
  );
};

export default Skills;
