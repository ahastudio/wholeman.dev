import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        Written by {author.name}
        <p className='author__social'>
        <a
          className={styles['author__bio-github']}
          href={getContactHref('github', author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
        Github
        </a>
        </p>
      </p>
    </div>
  );
};

export const Author = (props) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {       
                github
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
