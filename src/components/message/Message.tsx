import { IMessage } from '../../types';
import classes from './Message.module.scss';

export const Message = (props: IMessage) => {
  const { type, text } = props;
  let icon = 'fa-info-circle';

  switch (type) {
    case 'success':
      icon = 'fa-check';
      break;
    case 'warning':
      icon = 'fa-warning';
      break;
    case 'error':
      icon = 'fa-times-circle';
      break;
  }

  return (
    <>
      <div className={classes[`${type}-msg`]}>
        <i className={'fa ' + icon}></i>
        &nbsp;{text}
      </div>
    </>
  );
};
