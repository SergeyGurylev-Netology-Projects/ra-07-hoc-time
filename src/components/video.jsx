import DateTime from './date-time.jsx';
import dataTimePretty from './data-time-pretty.jsx';

export default function Video(props) {

  const DataTimePretty = dataTimePretty(DateTime);

  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DataTimePretty date={props.date}/>
    </div>
  )
}
