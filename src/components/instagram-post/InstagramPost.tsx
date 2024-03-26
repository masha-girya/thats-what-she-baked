'use client';

import { InstagramEmbed } from 'react-social-media-embed';
import { PostArrowIcon } from '../icons';
import { useDevice } from '@/hooks';
import styles from './instagram-post.module.scss';

interface IProps {
  postLink: string;
}

export const InstagramPost = ({ postLink }: IProps) => {
  const { isTablet, isMobile } = useDevice();

  return (
    <div className={styles.instaPost}>
      <InstagramEmbed
        url={postLink}
        width={isTablet || isMobile ? '100%' : 425}
        className={styles.instaPost__post}
      />
      <div className={styles.instaPost__textBox}>
        <p className={styles.instaPost__text}>
          Коментуй, запитуй, став лайк або просто дивись, що там в пості👀
        </p>
        <PostArrowIcon className={styles.instaPost__arrow} />
      </div>
    </div>
  );
};
