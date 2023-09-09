let sacksData = localStorage.getItem("sacksData");

if (sacksData === null) {
  sacksData = [];
} else {
  sacksData = JSON.parse(sacksData);
}

export default sacksData;
