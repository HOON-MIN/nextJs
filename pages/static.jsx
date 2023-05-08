const staticPage = ({ time }) => {
  return <div>{time}</div>;
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toString() }, revalidate: 3 };
};

export default staticPage;
