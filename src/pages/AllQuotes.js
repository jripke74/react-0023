import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Jeff', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Doug', text: 'Learning is fun'},
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
