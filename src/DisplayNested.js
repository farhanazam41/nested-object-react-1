const DisplayNested = ({ nestedObject }) => {
  console.log(Object.entries(nestedObject), "entires");
  return (
    <>
      {Object.entries(nestedObject).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{key}</p>
              <DisplayNested nestedObject={value} />
            </>
          );
        } else {
          return (
            <>
              <p>
                {key} - {value}
              </p>
            </>
          );
        }
      })}
    </>
  );
};

export default DisplayNested;
