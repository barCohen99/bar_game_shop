const Helmet = (props: any) => {
  document.title = "Bar Game Store -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
