import React from 'react';

export default function dataTimePretty(Component) {

  return function (props) {
    let dateCaption;
    const diff = parseInt((new Date() - new Date(props.date)) / (1000 * 60));

    if (diff < 60) {
      dateCaption = `${diff} минут назад`;
    } else if (diff < 60 * 24) {
      dateCaption = `${parseInt(diff / 60)} часов назад`;
    } else {
      dateCaption = `${parseInt(diff / 60 / 24)} дней назад`;
    }

    return Component.apply(this, [{...props, date: dateCaption}]);
  }
}
