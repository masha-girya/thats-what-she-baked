'use client';

import Image from 'next/image';
import { Article, Socials } from '@/components';
import { TextContent } from '@/components/article-text-content';
import { ABOUT_ME_DATA } from '@/constants';
import MyImage from './assets/IMG_5264.jpg';
import styles from './about-me.module.scss';

const AboutMe = () => {
  const { intro, article1, article2, article3, article4 } = ABOUT_ME_DATA;

  return (
    <main className={styles.about}>
      <section>
        <article className={styles.about__intro} data-set={intro.dataSet}>
          <Image
            src={MyImage.src}
            width={500}
            height={500}
            alt="My Image"
            priority={true}
            className={styles.about__intro__image}
          />
          <div className={styles.about__intro__text}>
            <h1 className={styles.about__intro__text__title}>{intro.title}</h1>
            {intro.content.map((text) => (
              <p key={text} className={styles.about__intro__text__desc}>
                {text}
              </p>
            ))}
          </div>
        </article>
        <Article dataSet={article1.dataSet} title={article1.title}>
          <TextContent content={article1.content} />
        </Article>
        <Article dataSet={article2.dataSet} title={article2.title} isShadowBox>
          <div className={styles.about__article__textBox}>
            {article2.content.map((info, index) => (
              <div key={index} className={styles.textImagePair}>
                <div className={styles.textImagePair__textBox}>
                  {info.text.length === 1 ? (
                    <p className={styles.textImagePair__textMain}>
                      {info.text}
                    </p>
                  ) : (
                    info.text.map((text) => (
                      <p key={text} className={styles.textImagePair__text}>
                        {text}
                      </p>
                    ))
                  )}
                </div>
                {'images' in info && (
                  <div className={styles.textImagePair__imageBox}>
                    {info.images?.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        width={200}
                        height={300}
                        alt={image.alt}
                        loading="lazy"
                        className={styles.textImagePair__imageBox__image}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Article>
        <Article dataSet={article3.dataSet} title={article3.title}>
          <TextContent content={article3.content} />
        </Article>
        <Article dataSet={article4.dataSet} title={article4.title}>
          {article4.content.map((text, index) => (
            <TextContent key={index} content={text} />
          ))}
          <div className={styles.about__socials}>
            <Socials isInSection />
          </div>
        </Article>
      </section>
    </main>
  );
};

export default AboutMe;
