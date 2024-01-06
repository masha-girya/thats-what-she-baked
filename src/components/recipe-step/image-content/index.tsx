import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  stepName: string;
  isLastImage: boolean;
  imageContent: string[];
}

export const ImageContent = (props: IProps) => {
  const { stepName, isLastImage, imageContent } = props;

  return (
    <div
      className={classNames(styles.imageBox, {
        [styles.imageBox_last]: isLastImage,
      })}
    >
      {imageContent.map((img: string, index: number) => (
        <div key={index}>
          <img
            className={classNames(styles.imageBox__image, {
              [styles.imageBox__image_last]: isLastImage,
            })}
            src={img}
            alt={`${stepName} - ${index}`}
          />
        </div>
      ))}
    </div>
  );
};