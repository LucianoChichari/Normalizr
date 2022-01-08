module.exports = (normalizedData, denormalizedData) => {
  let normalizedLength = JSON.stringify(normalizedData).length;
  let denormalizedLength = JSON.stringify(denormalizedData).length;

  console.log("Normalizr Data", JSON.stringify(normalizedData).length);
  console.log("Denormalizr Data",JSON.stringify(denormalizedData).length);

  return ((denormalizedLength - normalizedLength) / denormalizedLength) * 100;
};
