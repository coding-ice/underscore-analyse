import each from "./each";

function filter(list, predicate, context?) {
  const results = [];

  each(list, (val, index) => {
    if (predicate.apply(context, [val, index, list])) results.push(val);
  });

  return results;
}

export default filter;
